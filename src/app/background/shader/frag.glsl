precision highp float;
precision highp sampler2D;

varying vec2 vUv;

// size of the canvas in pixels
uniform vec2 u_resolution;
// elapsed time since shader compile in seconds
uniform float u_time;
uniform bool u_darkMode;

const mat2 m = mat2(0.80, 0.60, -0.60, 0.80);

const float t_scale = 1.0;
const float u_scale = 1.5;

float noise(in vec2 p) {
    return sin(p.x) * sin(p.y);
}

float noise4(vec2 p) {
    float f = 0.0;
    float weight = 0.5;
    float scale = 1.0;
    for (int i = 0; i < 4; i++) {
        f += weight * noise(p);
        p = m * p * 2.02;
        weight *= 0.5;
        scale += weight;
    }
    return f / scale;
}

float noise6(vec2 p) {
    float f = 0.0;
    float weight = 0.5;
    float totalWeight = 0.0;
    for (int i = 0; i < 4; i++) { // Reduced from 6 to 4 octaves
        f += weight * (0.5 + 0.5 * noise(p));
        p = m * p * (2.02 + float(i) * 0.01); // Simplifying scale changes slightly
        totalWeight += weight;
        weight *= 0.5;
    }
    return f / totalWeight;
}

vec2 noise4_2(vec2 p) {
    return vec2(noise4(p), noise4(p + vec2(7.8)));
}

vec2 noise6_2(vec2 p) {
    return vec2(noise6(p + vec2(16.8)), noise6(p + vec2(11.5)));
}

float totalNoise(vec2 q, out vec4 ron) {
    vec2 timeVec = vec2(0.27, 0.23) * u_time * t_scale;
    q += 0.03 * sin(timeVec + length(q) * vec2(4.1, 4.3)); // Precompute part of sin calculation
    vec2 o = noise6_2(0.9 * q); // Assuming noise6_2 is already optimized
    o += 0.04 * sin(vec2(0.12, 0.14) * u_time * t_scale + length(o)); // Same as above for sin

    vec2 n = noise4_2(3.0 * o); // Assuming noise4_2 is optimized
    ron = vec4(o, n);
    float f = 0.5 + 0.5 * noise4(1.8 * q + 6.0 * n); // Try reducing complexity in noise4 if needed

    // Simplify mix calculations
    float ff = f * f;
    return mix(f, ff * ff * 3.5, f * abs(n.x));
}

vec3 getColor(vec2 p) {
    vec4 on = vec4(0);
    float f1 = totalNoise(p, on);
    float f = max(f1, 0.4 / f1);

    vec3 col = mix(vec3(0.718, 0.322, 0.984), vec3(0.235, 0.925, 0.976), f);
    col = mix(vec3(0.600, 0.000, 1.000), vec3(0.000, 0.549, 1.000), col);
    col = mix(col, vec3(0.114, 0.004, 0.259), dot(on.zw, on.zw));
    col = mix(col, vec3(0.792, 0.741, 1.000), 0.2 + 0.5 * on.y * on.y);
    col = mix(col, vec3(0.1, 0.8, 0.9), 0.5 * smoothstep(1.2, 1.3, abs(on.z) + abs(on.w)));
    col = clamp(col * f * 1.5, 0.0, 1.0);

    vec4 kk;
    vec3 nor = normalize(vec3(totalNoise(p + vec2(1.0 / u_resolution.y, 0.0), kk) - f, 2.0 * (1.0 / u_resolution.y), totalNoise(p + vec2(0.0, 1.0 / u_resolution.y), kk) - f));

    vec3 lig = normalize(vec3(0.9, 0.2, -0.4));
    float dif = clamp(0.3 + 0.7 * dot(nor, lig), 0.0, 1.0);
    vec3 lin = vec3(0.941, 0.973, 0.980) + vec3(0.376, 0.396, 0.933) * dif;

    col *= 1.2 * lin;
    col = 1.1 * col * col;
    return col;
}

vec3 blur(vec2 uv) {
    float blurSize = 25.0 / u_resolution.y * u_scale; // Reduced blur size
    vec3 col = vec3(0.0);
    col += getColor(uv + vec2(-blurSize, 0.0)) * 0.25;
    col += getColor(uv + vec2(blurSize, 0.0)) * 0.25;
    col += getColor(uv + vec2(0.0, -blurSize)) * 0.25;
    col += getColor(uv + vec2(0.0, blurSize)) * 0.25;
    return col;
}

float luminance(vec3 color) {
    return dot(color, vec3(0.0, 1.0, 0.0));
}

void main() {
    vec2 uv = vec2(vUv);
    vec2 p = (u_scale * uv - vec2(0, 0)) * vec2(u_resolution.x / u_resolution.y, 1.0) * vec2(0.5);
    vec3 waves = normalize(blur(p));
    float luminanceValue = luminance(waves);

    if (u_darkMode)
        waves = vec3(luminanceValue) * vec3(waves.x + waves.y + waves.z, 0,0);
    else
        waves = vec3(luminanceValue) * waves;

    waves = mix(vec3(luminanceValue * 0.5), waves, 0.5);
    
    vec2 grid = p * 200.;
    vec2 grid_frac = fract(grid);

    vec2 dist = grid_frac - 0.5;
    float distance = length(dist);

    float dot_radius = 0.03 + luminanceValue;
    float mask = step(distance, dot_radius);

    // bg, dots, mask
    vec3 finalColor = mix(waves, waves*1.5, mask);
    finalColor = clamp(u_time, 0.0, 1.0) * finalColor;

    gl_FragColor.rgba = vec4(finalColor, 1.0);
}
