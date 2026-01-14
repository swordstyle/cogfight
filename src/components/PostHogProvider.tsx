"use client";

import { useEffect } from "react";
import { getPostHog } from "@/lib/posthog";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    getPostHog();
  }, []);

  return <>{children}</>;
}