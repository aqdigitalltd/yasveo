// Moves focus to the confirmation so screen reader and keyboard users land on it.
const focusOnMount = (node: HTMLDivElement | null) => node?.focus();

export interface IFormSuccess {
  title: string;
  message: string;
}

export const FormSuccess = ({ title, message }: IFormSuccess) => (
  <div ref={focusOnMount} tabIndex={-1} role="status" className="py-4 outline-none sm:py-8">
    <span aria-hidden className="flex size-12 items-center justify-center rounded-xs bg-accent text-xl text-white">
      ✓
    </span>
    <p className="heading-lg mt-7">{title}</p>
    <p className="mt-4 max-w-[44ch] text-charcoal">{message}</p>
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
