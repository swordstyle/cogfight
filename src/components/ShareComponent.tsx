"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/posthog";

interface ShareComponentProps {
  biasName: string;
  isVisible: boolean;
}

export function ShareComponent({ biasName, isVisible }: ShareComponentProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareText = `I spotted the ${biasName} in this post. Can you? 🧠 ${window.location.href}`;

    trackEvent('individual_answer_shared', {
      bias_type: biasName
    });

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleShare}
      className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 whitespace-nowrap"
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="hidden sm:inline">Copied!</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span className="hidden sm:inline">Share</span>
        </>
      )}
    </button>
  );
}