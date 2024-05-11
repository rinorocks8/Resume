import * as THREE from "three";

import { extend, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

import frag from "./frag.glsl";
import { shaderMaterial } from "@react-three/drei";
import vertex from "./vertex.glsl";

// Shader Material Definition
const TestShaderMaterial = shaderMaterial(
  {
    u_time: 0.0,
    u_resolution: new THREE.Vector2(1, 1),
  },
  vertex,
  frag
);

extend({ TestShaderMaterial });

type TestShaderMaterialType = THREE.ShaderMaterial & {
  u_time: number;
  u_resolution: THREE.Vector2;
} & HTMLElement;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      testShaderMaterial: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { ref?: React.Ref<TestShaderMaterialType> };
    }
  }
}

export default function FullScreenQuad() {
  // Reference to the mesh and material
  const meshRef = useRef<TestShaderMaterialType>(null);
  const [resolution, setResolution] = useState(new THREE.Vector2(1, 1));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setResolution(new THREE.Vector2(window.innerWidth, window.innerHeight));
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.uniforms.u_time.value += delta;
      meshRef.current.uniforms.u_resolution.value = resolution;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <testShaderMaterial key={TestShaderMaterial.key} ref={meshRef} />
    </mesh>
  );
}
