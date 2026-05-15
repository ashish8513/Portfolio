"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    document.documentElement.classList.add("lenis");
    document.documentElement.classList.add("lenis-smooth");

    const lenis = new Lenis({
      duration: 1.28,
      lerp: 0.055,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.05,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    const onStop = () => lenis.stop();
    const onStart = () => lenis.start();
    window.addEventListener("portfolio:lenis-stop", onStop);
    window.addEventListener("portfolio:lenis-start", onStart);

    return () => {
      window.removeEventListener("portfolio:lenis-stop", onStop);
      window.removeEventListener("portfolio:lenis-start", onStart);
      gsap.ticker.remove(update);
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return null;
}
