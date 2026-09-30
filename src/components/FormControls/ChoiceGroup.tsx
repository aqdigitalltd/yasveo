import type { UseFormRegisterReturn } from "react-hook-form";

export type ChoiceType = "checkbox" | "radio";

export interface IChoiceGroup {
  id: string;
  legend: string;
  options: string[];
  registration: UseFormRegisterReturn;
  type?: ChoiceType;
  hint?: string;
  error?: string;
}

/** A set of checkboxes or radios shown as pills; selected pills turn black. */
export const ChoiceGroup = ({ id, legend, options, registration, type = "checkbox", hint, error }: IChoiceGroup) => (
  <fieldset
    aria-describedby={[hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined}
  >
    <legend className="text-[0.9375rem] font-medium">{legend}</legend>
    {hint && (
      <p id={`${id}-hint`} className="mt-1 text-sm text-muted">
        {hint}
      </p>
    )}
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((option) => (
        <label key={option} className="cursor-pointer">
          <input type={type} value={option} className="peer sr-only" {...registration} />
          <span className="block rounded-xs border border-line-strong bg-white px-4 py-2 text-[0.9375rem] leading-tight transition-colors duration-200 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent hover:border-ink/60">
            {option}
          </span>
        </label>
      ))}
    </div>
    {error && (
      <p id={`${id}-error`} className="mt-2 text-sm text-error">
        {error}
      </p>
    )}
  </fieldset>
);
