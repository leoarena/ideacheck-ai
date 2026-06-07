import type { ChangeEvent } from "react";

interface IdeaTextareaProps {
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
  id?: string;
  label?: string;
  placeholder?: string;
  rows?: number;
}

export function IdeaTextarea({
  value,
  disabled,
  onChange,
  id = "idea",
  label = "Ideia de negócio",
  placeholder = "Exemplo: uma plataforma local para pequenos restaurantes preverem demanda e reduzirem desperdício.",
  rows = 8
}: IdeaTextareaProps) {
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className="min-h-48 w-full resize-y rounded-lg border border-line bg-white px-4 py-3 text-base leading-7 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:bg-surface"
      />
    </div>
  );
}
