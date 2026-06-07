"use client";

import { useState } from "react";
import { uiMessages } from "@/lib/messages";
import type { RequestStatus } from "@/types/ui";

interface ResultCopyButtonProps {
  markdown: string;
}

export function ResultCopyButton({ markdown }: ResultCopyButtonProps) {
  const [status, setStatus] = useState<RequestStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleCopy() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard indisponível");
      }

      await navigator.clipboard.writeText(markdown);
      setStatus("success");
      setMessage(uiMessages.copyMarkdownSuccess);
    } catch {
      setStatus("error");
      setMessage(uiMessages.copyMarkdownError);
    }
  }

  return (
    <div className="flex flex-col gap-2 sm:items-end">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-h-10 items-center justify-center rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
      >
        Copiar resultado em Markdown
      </button>
      <p
        aria-live="polite"
        className={`min-h-5 text-sm ${status === "error" ? "text-warning" : "text-muted"}`}
      >
        {message}
      </p>
    </div>
  );
}
