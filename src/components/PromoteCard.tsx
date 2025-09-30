"use client";

import { useCallback, useRef, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const onContextMenu = useCallback<EventListener>((e: Event) => {
    const root = wrapperRef.current;
    const target = e.target as Node | null;
    if (root && target && root.contains(target)) {
      e.preventDefault();
    }
  }, []);

  useWindowListener("contextmenu", onContextMenu);

  return (
    <div
      ref={wrapperRef}
      className="
        max-w-3xl mx-auto p-6
        bg-white rounded-2xl shadow
        flex flex-col items-center gap-4
      "
    >
      <h2 className="text-xl font-semibold">Venue Promo</h2>
      <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={playing} />

      <button
        className="
          px-5 py-2 rounded-lg
          bg-gray-900 text-white
          hover:bg-gray-800 transition
        "
        onClick={() => setPlaying((v) => !v)}
        name={playing ? "Pause" : "Play"}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
