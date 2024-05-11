"use client";

import { Canvas } from "@react-three/fiber";
import FullScreenQuad from "./shader/FullScreenQuad";

export default function Background() {
  return (
    <div className="w-screen h-screen">
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
        <FullScreenQuad />
      </Canvas>
    </div>
  );
}
