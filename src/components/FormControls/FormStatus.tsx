import type { ReactNode } from "react";

// Moves focus to the confirmation so screen reader and keyboard users land on it.
const focusOnMount = (node: HTMLDivElement | null) => node?.focus();

export interface IFormSuccess {
  title: ReactNode;
  message: string;
}

export const FormSuccess = ({ title, message }: IFormSuccess) => (
  <div ref={focusOnMount} tabIndex={-1} role="status" className="py-6 outline-none sm:py-10">
    <span
      aria-hidden
      className="flex size-12 items-center justify-center rounded-xs bg-accent text-xl text-white"
    >
      ✓
    </span>
    <p className="display-md mt-8 max-w-[18ch]">{title}</p>
    <p className="body-lg mt-5 max-w-[44ch] text-graphite">{message}</p>
  </div>
);

export interface IFormError {
  message?: string;
}

export const FormError = ({ message }: IFormError) =>
  message ? (
    <p role="alert" className="rounded-xs border border-error/30 bg-error/5 px-4 py-3 text-error">
      {message}
    </p>
  ) : null;

export interface IFormStep {
  title: string;
  description?: string;
  children: ReactNode;
}

/** A titled group of related fields. */
export const FormStep = ({ title, description, children }: IFormStep) => (
  <fieldset>
    <legend className="heading-md">{title}</legend>
    {description && <p className="mt-1 text-muted">{description}</p>}
    <div className="mt-6 grid gap-x-5 gap-y-6 sm:grid-cols-2">{children}</div>
  </fieldset>
);
