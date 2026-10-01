import type { ReactNode } from "react";

export interface IFieldWrapper {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

// The error line is always rendered at one line's height, so a message appearing doesn't move the form.
export const FieldWrapper = ({ id, label, error, children }: IFieldWrapper) => (
  <div>
    <label htmlFor={id} className="block text-[0.9375rem] font-medium">
      {label}
    </label>
    <div className="mt-2">{children}</div>
    <p id={`${id}-error`} className="mt-1.5 min-h-5 text-sm leading-5 text-error">
      {error}
    </p>
  </div>
);
