import type { ChangeEvent } from "react";

interface IdeaTextareaProps {
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}

export function IdeaTextarea({ value, disabled, onChange }: IdeaTextareaProps) {
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <div className="space-y-2">
      <label htmlFor="idea" className="text-sm font-semibold text-ink">
        Ideia de negócio
      </label>
      <textarea
        id="idea"
        name="idea"
        value={value}
        onChange={handleChange}
        placeholder="Exemplo: uma plataforma local para pequenos restaurantes preverem demanda e reduzirem desperdício."
        rows={8}
        disabled={disabled}
        className="min-h-48 w-full resize-y rounded-lg border border-line bg-white px-4 py-3 text-base leading-7 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:bg-surface"
      />
    </div>
  );
}
