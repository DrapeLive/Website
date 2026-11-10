"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false },
);

/**
 * The hero animation is decorative and heavy (two ~284 KB JSON files), so it is
 * mounted after the page is interactive. The wrapper reserves the animation's
 * square aspect ratio to avoid layout shift.
 */
export default function HeroAnimation() {
  const [mounted, setMounted] = useState(false);
  const [src, setSrc] = useState("hero-anim-load.json");
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 300);
    return () => window.clearTimeout(timeout);
  }, []);

  const onComplete = () => {
    if (src === "hero-anim-load.json") {
      setSrc("hero-anim-loop.json");
      setLoop(true);
    }
  };

  return (
    <div className="relative aspect-square w-full max-w-[350px]">
      {mounted ? (
        <DotLottieReact
          src={src}
          loop={loop}
          autoplay
          dotLottieRefCallback={(dotLottie) => {
            if (!dotLottie) return;
            dotLottie.addEventListener("complete", onComplete);
          }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#CFDBC2]/40 blur-3xl"
        />
      )}
    </div>
  );
}
