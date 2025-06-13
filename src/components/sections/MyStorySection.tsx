import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "../ui/Reveal";

/**
 * Before / After slider shown in the “My Story” section.
 * – Single relative container → images + handle share one coordinate system.
 * – Pointer events: one handler covers mouse + touch.
 * – Framer Motion `layout` prop gives the handle a spring on release.
 */
export default function MyStorySection() {
  const [pos, setPos] = useState(50); // 0-100 %
  const boxRef = useRef<HTMLDivElement>(null);

  /** Convert any clientX into a 0-100 % position */
  const calcPos = (clientX: number) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return pos;
    return Math.min(
      100,
      Math.max(0, ((clientX - rect.left) / rect.width) * 100)
    );
  };

  /** Unified mouse + touch + pen handler */
  const startDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setPos(calcPos(e.clientX));

    const move = (ev: PointerEvent) => setPos(calcPos(ev.clientX));
    const up = (ev: PointerEvent) => {
      ev.currentTarget?.removeEventListener("pointermove", move);
      ev.currentTarget?.removeEventListener("pointerup", up);
    };

    e.currentTarget.addEventListener("pointermove", move);
    e.currentTarget.addEventListener("pointerup", up);
  };

  return (
    <motion.section
      className="w-full py-16 px-4 md:px-8 bg-[#FFF1F1]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B0082] mb-4">
              MY STORY
            </h2>
            <p className="text-xl text-[#4B0082]/90 font-medium">
              YOUR JOURNEY TO CONFIDENCE STARTS HERE
            </p>
          </div>
        </Reveal>

        {/* Center the slider component */}
        <div className="flex justify-center items-center mb-10">
          {/* Centered slider */}
          <div className="w-full max-w-lg">
            <Reveal viewport={{ once: true, amount: 0.1 }}>
              <div
                ref={boxRef}
                onPointerDown={startDrag}
                className="relative w-full aspect-[1/1] min-h-[300px] max-h-[500px] rounded-2xl overflow-hidden shadow-lg cursor-ew-resize select-none"
              >
                {/* AFTER (background) */}
                <img
                  src="/images/before-image.jpg"
                  alt="After transformation, 2021"
                  className="absolute inset-0 w-full h-full object-cover object-[40%_40%]"
                />

                {/* BEFORE (clipped overlay) */}
                <img
                  src="/images/after-image.jpg"
                  alt="Before transformation, 2025"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_65%]"
                  style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
                />

                {/* Handle */}
                <motion.div
                  layout
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-md"
                  style={{ left: `${pos}%`, translateX: "-50%" }}
                ></motion.div>

                {/* Year badges */}
                <span className="absolute top-4 left-4 bg-pink-200 text-[#4B0082] rounded-full px-3 py-1 text-sm font-medium">
                  2021
                </span>
                <span className="absolute top-4 right-4 bg-pink-200 text-[#4B0082] rounded-full px-3 py-1 text-sm font-medium">
                  2025
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
