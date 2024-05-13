"use client";

import { Canvas } from "@react-three/fiber";
import { Context } from "@/app/provider";
import FullScreenQuad from "./shader/FullScreenQuad";
import { useContext } from "react";

export default function Background() {
  const { darkMode } = useContext(Context);
  return (
    <div className="w-screen h-screen">
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
        <FullScreenQuad darkMode={darkMode} />
      </Canvas>
    </div>
  );
}
