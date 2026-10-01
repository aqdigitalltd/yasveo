import type { ReactNode } from "react";

export interface IFieldWrapper {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

export const FieldWrapper = ({ id, label, error, children }: IFieldWrapper) => (
  <div>
    <label htmlFor={id} className="block text-[0.9375rem] font-medium">
      {label}
    </label>
    <div className="mt-2">{children}</div>
    {error && (
      <p id={`${id}-error`} className="mt-2 text-sm text-error">
        {error}
      </p>
    )}
  </div>
);
