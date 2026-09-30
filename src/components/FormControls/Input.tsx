import type { ComponentProps } from "react";
import { FieldWrapper, getDescribedBy } from "./FieldWrapper";

export const fieldClassName =
  "block w-full rounded-xs border border-line-strong bg-white px-4 py-3 text-base text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted/80 hover:border-ink/60 focus:border-ink focus:ring-2 focus:ring-accent aria-invalid:border-error";

export interface IInput extends ComponentProps<"input"> {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
}

export const Input = ({ id, label, error, hint, optional, className = "", ...props }: IInput) => (
  <FieldWrapper id={id} label={label} error={error} hint={hint} optional={optional}>
    <input
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={getDescribedBy(id, hint, error)}
      className={`${fieldClassName} ${className}`}
      {...props}
    />
  </FieldWrapper>
);
