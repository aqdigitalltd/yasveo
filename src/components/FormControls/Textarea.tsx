import type { ComponentProps } from "react";
import { FieldWrapper } from "./FieldWrapper";
import { fieldClassName } from "./Input";

export interface ITextarea extends ComponentProps<"textarea"> {
  id: string;
  label: string;
  error?: string;
}

export const Textarea = ({ id, label, error, rows = 3, ...props }: ITextarea) => (
  <FieldWrapper id={id} label={label} error={error}>
    <textarea
      id={id}
      rows={rows}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${fieldClassName} min-h-28 resize-y`}
      {...props}
    />
  </FieldWrapper>
);
