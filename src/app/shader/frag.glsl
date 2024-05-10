precision highp float;
precision highp sampler2D;

// normalized coordinates, (0,0) is the bottom left
// in vec2 uv;
// // resulting fragment color, you may name it whatever you like
// out vec4 out_color;
varying vec2 vUv;

// size of the canvas in pixels
uniform vec2 u_resolution;
// elapsed time since shader compile in seconds
uniform float u_time;

const mat2 m = mat2(0.80, 0.60, -0.60, 0.80);

const float t_scale = 0.5;
const float u_scale = 1.5;

float noise(in vec2 p) {
    return sin(p.x) * sin(p.y);
}

float noise4(vec2 p) {
    float f = 0.0;
    f += 0.5000 * noise(p); 
    p = m * p * 2.02;
    f += 0.2500 * noise(p); 
    p = m * p * 2.03;
    f += 0.1250 * noise(p); 
    p = m * p * 2.01;
    f += 0.0625 * noise(p);
    return f / 0.9375;
}

float noise6(vec2 p) {
    float f = 0.0;
    f += 0.500000 * (0.5 + 0.5 * noise(p)); 
    p = m * p * 2.02;
    f += 0.250000 * (0.5 + 0.5 * noise(p)); 
    p = m * p * 2.03;
    f += 0.125000 * (0.5 + 0.5 * noise(p)); 
    p = m * p * 2.01;
    f += 0.062500 * (0.5 + 0.5 * noise(p)); 
    p = m * p * 2.04;
    f += 0.031250 * (0.5 + 0.5 * noise(p)); 
    p = m * p * 2.01;
    f += 0.015625 * (0.5 + 0.5 * noise(p));
    return f / 0.96875;
}

vec2 noise4_2(vec2 p) {
    return vec2(noise4(p), noise4(p + vec2(7.8)));
}

vec2 noise6_2(vec2 p) {
    return vec2(noise6(p + vec2(16.8)), noise6(p + vec2(11.5)));
}

float totalNoise(vec2 q, out vec4 ron) {
    q += 0.03 * sin(vec2(0.27, 0.23) * u_time * t_scale + length(q) * vec2(4.1, 4.3));
    vec2 o = noise6_2(0.9 * q);
    o += 0.04 * sin(vec2(0.12, 0.14) * u_time * t_scale + length(o));
    vec2 n = noise4_2(3.0 * o);
    ron = vec4(o, n);
    float f = 0.5 + 0.5 * noise4(1.8 * q + 6.0 * n);
    return mix(f, f * f * f * 3.5, f * abs(n.x));
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
    float blurSize = 50. / u_resolution.y * u_scale;
    vec3 col = vec3(0.0);
    col += getColor(uv + vec2(-blurSize, -blurSize)) * 0.05;
    col += getColor(uv + vec2(blurSize, -blurSize)) * 0.05;
    col += getColor(uv + vec2(-blurSize, blurSize)) * 0.05;
    col += getColor(uv + vec2(blurSize, blurSize)) * 0.05;
    col += getColor(uv + vec2(-blurSize, 0.0)) * 0.1;
    col += getColor(uv + vec2(blurSize, 0.0)) * 0.1;
    col += getColor(uv + vec2(0.0, -blurSize)) * 0.1;
    col += getColor(uv + vec2(0.0, blurSize)) * 0.1;
    col += getColor(uv) * 0.4;
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

    vec2 grid = p * 200.;
    vec2 grid_frac = fract(grid);

    vec2 dist = grid_frac - 0.5;
    float distance = length(dist);

    float dot_radius = 0.03 + luminanceValue;
    float mask = step(distance, dot_radius);

    vec3 finalColor = mix(waves, waves*1.5, mask);

    gl_FragColor.rgba = vec4(finalColor, 1.0);
}
