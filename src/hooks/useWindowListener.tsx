"use client";

import { useEffect } from "react";

export default function useWindowListener(
  eventType: string,
  listener: EventListener
) {
  useEffect(() => {
    const opts: AddEventListenerOptions | boolean = { passive: false };

    window.addEventListener(eventType, listener, opts);
    return () => {
      window.removeEventListener(eventType, listener, opts as any);
    };
  }, [eventType]);
}
