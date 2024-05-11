"use client";

import { Canvas } from "@react-three/fiber";
import FullScreenQuad from "./shader/FullScreenQuad";

export default function Background({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="w-screen h-screen">
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
        <FullScreenQuad darkMode={darkMode} />
      </Canvas>
    </div>
  );
}
