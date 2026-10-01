import type { ComponentProps } from "react";
import { FieldWrapper } from "./FieldWrapper";

export const fieldClassName =
  "block w-full rounded-xs border border-line-strong bg-white px-4 py-3 text-base text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted/80 hover:border-accent/60 focus:border-accent focus:ring-3 focus:ring-accent/15 aria-invalid:border-error";

export interface IInput extends ComponentProps<"input"> {
  id: string;
  label: string;
  error?: string;
}

export const Input = ({ id, label, error, className = "", ...props }: IInput) => (
  <FieldWrapper id={id} label={label} error={error}>
    <input
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${fieldClassName} ${className}`}
      {...props}
    />
  </FieldWrapper>
);
