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
    u_darkMode: false,
    u_darkModeTime: 100.0,
  },
  vertex,
  frag
);

extend({ TestShaderMaterial });

type TestShaderMaterialType = THREE.ShaderMaterial & {
  u_time: number;
  u_resolution: THREE.Vector2;
  u_darkMode: boolean;
  u_darkModeTime: number;
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

export default function FullScreenQuad({ darkMode }: { darkMode: boolean }) {
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

  const [initLoad, setInitLoad] = useState(true);
  useEffect(() => {
    if (meshRef.current) {
      if (!initLoad) {
        meshRef.current.u_darkModeTime = 0.0;
      }
      meshRef.current.u_darkMode = darkMode;
      setInitLoad(false);
    }
  }, [darkMode]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.uniforms.u_time.value += delta;
      meshRef.current.uniforms.u_resolution.value = resolution;
      meshRef.current.u_darkModeTime += delta;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <testShaderMaterial key={TestShaderMaterial.key} ref={meshRef} />
    </mesh>
  );
}
