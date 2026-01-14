"use client";

import { useEffect } from "react";
import { getPostHog } from "@/lib/posthog";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      getPostHog();
    } catch (error) {
      console.warn('PostHog provider initialization failed:', error);
    }
  }, []);

  return <>{children}</>;
}