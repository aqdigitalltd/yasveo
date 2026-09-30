import type { ReactNode } from "react";

export interface IFieldWrapper {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: ReactNode;
}

export const getDescribedBy = (id: string, hint?: string, error?: string): string | undefined =>
  [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

export const FieldWrapper = ({ id, label, error, hint, optional, children }: IFieldWrapper) => (
  <div>
    <label htmlFor={id} className="block text-[0.9375rem] font-medium">
      {label}
      {optional && <span className="ml-1.5 font-normal text-muted">(optional)</span>}
    </label>
    {hint && (
      <p id={`${id}-hint`} className="mt-1 text-sm text-muted">
        {hint}
      </p>
    )}
    <div className="mt-2">{children}</div>
    {error && (
      <p id={`${id}-error`} className="mt-2 text-sm text-error">
        {error}
      </p>
    )}
  </div>
);
