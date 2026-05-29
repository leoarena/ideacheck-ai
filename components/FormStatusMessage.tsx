import type { RequestStatus } from "@/types/ui";

interface FormStatusMessageProps {
  status: RequestStatus;
  message: string | null;
}

export function FormStatusMessage({ status, message }: FormStatusMessageProps) {
  if (!message) {
    return null;
  }

  return (
    <p
      className={`mt-4 rounded-lg border px-4 py-3 text-sm leading-6 ${
        status === "error" ? "border-amber-300 bg-amber-50 text-warning" : "border-line bg-surface text-muted"
      }`}
    >
      {message}
    </p>
  );
}
