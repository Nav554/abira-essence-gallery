import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);
    const on = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);
  if (!visible) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, oklch(0.82 0.14 85 / 0.18), transparent 60%)",
        transition: "transform 0.05s linear",
      }}
    />
  );
}
