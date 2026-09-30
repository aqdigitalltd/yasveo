import type { ComponentProps } from "react";
import { FieldWrapper, getDescribedBy } from "./FieldWrapper";
import { fieldClassName } from "./Input";

export interface ISelect extends ComponentProps<"select"> {
  id: string;
  label: string;
  options: string[];
  placeholder?: string;
  error?: string;
  hint?: string;
  optional?: boolean;
}

export const Select = ({ id, label, options, placeholder = "Choose one", error, hint, optional, ...props }: ISelect) => (
  <FieldWrapper id={id} label={label} error={error} hint={hint} optional={optional}>
    <div className="relative">
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={getDescribedBy(id, hint, error)}
        className={`${fieldClassName} cursor-pointer appearance-none pr-10 has-[option[value='']:checked]:text-muted`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span aria-hidden className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-sm text-muted">
        ↓
      </span>
    </div>
  </FieldWrapper>
);
