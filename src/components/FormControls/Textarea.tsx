import type { ComponentProps } from "react";
import { FieldWrapper, getDescribedBy } from "./FieldWrapper";
import { fieldClassName } from "./Input";

export interface ITextarea extends ComponentProps<"textarea"> {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
}

export const Textarea = ({ id, label, error, hint, optional, rows = 3, ...props }: ITextarea) => (
  <FieldWrapper id={id} label={label} error={error} hint={hint} optional={optional}>
    <textarea
      id={id}
      rows={rows}
      aria-invalid={error ? true : undefined}
      aria-describedby={getDescribedBy(id, hint, error)}
      className={`${fieldClassName} min-h-28 resize-y`}
      {...props}
    />
  </FieldWrapper>
);
