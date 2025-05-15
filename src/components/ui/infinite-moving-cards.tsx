// src/components/ui/infinite-moving-cards.tsx
"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    // 1. Duplicate items for seamless scroll
    Array.from(scroller.children).forEach((item) => {
      scroller.appendChild(item.cloneNode(true));
    });

    // 2. Apply direction
    container.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // 3. Apply speed
    let duration: string;
    if (speed === "fast") duration = "20s";
    else if (speed === "normal") duration = "40s";
    else duration = "80s";
    container.style.setProperty("--animation-duration", duration);

    // 4. Kick off animation
    setStarted(true);

    // no cleanup needed for this simple CSS-based animation
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          started && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <blockquote>
              <span className="relative z-20 block text-sm leading-[1.6] text-gray-100">
                {item.quote}
              </span>
              <footer className="relative z-20 mt-6">
                <p className="text-sm text-gray-400">{item.name}</p>
                <p className="text-sm text-gray-400">{item.title}</p>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
