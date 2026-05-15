"use client";

import { ProfileBrandOverlay } from "@/components/sections/profile-brand-overlay";
import type { ProfileLink } from "@/lib/content";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  type TouchEvent as ReactTouchEvent,
} from "react";

const IDLE_PEEK = 42;
const IDLE_SCREENSHOT = 94;

type ProfileCompareSliderProps = {
  before: ReactNode;
  after: ReactNode;
  image?: string;
  platform?: ProfileLink["icon"];
  beforeImage?: string;
  afterImage?: string;
  className?: string;
};

export function ProfileCompareSlider({
  before,
  after,
  image,
  platform,
  beforeImage,
  afterImage,
  className,
}: ProfileCompareSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const brandMode = Boolean(image && platform);
  const idlePeek = brandMode ? IDLE_SCREENSHOT : IDLE_PEEK;

  const [pct, setPct] = useState(idlePeek);
  const [hovering, setHovering] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  const revealWidth = hovering ? pct : idlePeek;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setTrackWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clamp = useCallback(
    (x: number) => {
      const el = trackRef.current;
      if (!el) return idlePeek;
      const rect = el.getBoundingClientRect();
      const ratio = ((x - rect.left) / rect.width) * 100;
      const raw = Math.min(94, Math.max(8, ratio));
      return brandMode ? 100 - raw : raw;
    },
    [brandMode, idlePeek],
  );

  const onMouseMove = (e: ReactMouseEvent) => {
    setPct(clamp(e.clientX));
  };

  const onMouseEnter = (e: ReactMouseEvent) => {
    setHovering(true);
    setPct(clamp(e.clientX));
  };

  const onMouseLeave = () => {
    setHovering(false);
    setPct(idlePeek);
  };

  const onTouchMove = (e: ReactTouchEvent) => {
    if (e.touches[0]) setPct(clamp(e.touches[0].clientX));
  };

  const hasDualImages = Boolean(beforeImage && afterImage);
  const hasSingleImage = Boolean(image);

  return (
    <div
      ref={trackRef}
      className={cn(
        "group/compare relative aspect-[16/10] w-full select-none overflow-hidden rounded-xl border border-white/[0.08] bg-[#050508]",
        hovering && "cursor-crosshair",
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onTouchStart={(e) => {
        setHovering(true);
        if (e.touches[0]) setPct(clamp(e.touches[0].clientX));
      }}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseLeave}
      role="img"
      aria-label="Move mouse over the image to explore the profile"
    >
      {hasSingleImage && platform ? (
        <>
          <div className="absolute inset-0">
            <ProfileBrandOverlay platform={platform} />
          </div>
          <div
            className="absolute inset-y-0 left-0 overflow-hidden transition-[width] duration-100 ease-out"
            style={{ width: `${revealWidth}%` }}
          >
            <div className="relative h-full" style={{ width: trackWidth || "100%" }}>
              <Image
                src={image!}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 420px"
                draggable={false}
              />
            </div>
          </div>
        </>
      ) : hasSingleImage ? (
        <>
          <Image
            src={image!}
            alt=""
            fill
            className="object-cover object-top brightness-[0.55] saturate-[0.9]"
            sizes="(max-width: 768px) 100vw, 420px"
            draggable={false}
          />
          <div
            className="absolute inset-y-0 left-0 overflow-hidden transition-[width] duration-100 ease-out"
            style={{ width: `${revealWidth}%` }}
          >
            <div className="relative h-full" style={{ width: trackWidth || "100%" }}>
              <Image
                src={image!}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 420px"
                draggable={false}
              />
            </div>
          </div>
        </>
      ) : hasDualImages ? (
        <>
          <Image
            src={afterImage!}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 420px"
            draggable={false}
          />
          <div
            className="absolute inset-y-0 left-0 overflow-hidden transition-[width] duration-100 ease-out"
            style={{ width: `${revealWidth}%` }}
          >
            <div className="relative h-full" style={{ width: trackWidth || "100%" }}>
              <Image
                src={beforeImage!}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 420px"
                draggable={false}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 opacity-90">{after}</div>
          <div
            className="absolute inset-y-0 left-0 overflow-hidden transition-[width] duration-100 ease-out"
            style={{ width: `${revealWidth}%` }}
          >
            <div className="h-full min-w-0" style={{ width: trackWidth || "100%" }}>
              {before}
            </div>
          </div>
        </>
      )}

      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 z-20 w-px bg-white/90 shadow-[0_0_14px_rgba(255,255,255,0.55)] transition-opacity duration-150",
          brandMode && !hovering && "opacity-0",
        )}
        style={{ left: `${revealWidth}%` }}
      />
      <div
        className={cn(
          "pointer-events-none absolute top-1/2 z-30 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#0a0a0a]/90 shadow-lg backdrop-blur-sm transition-all duration-150",
          hovering && "scale-110",
          brandMode && !hovering && "opacity-0",
        )}
        style={{ left: `${revealWidth}%` }}
      >
        <GripVertical className="h-4 w-4 text-white" aria-hidden />
      </div>
    </div>
  );
}
