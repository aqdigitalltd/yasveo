export interface ICheckList {
  items: string[];
  className?: string;
}

export const CheckList = ({ items, className = "" }: ICheckList) => (
  <ul className={`flex flex-col gap-3.5 ${className}`}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3.5">
        <span
          aria-hidden
          className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-xs bg-accent text-[0.6875rem] leading-none text-white on-dark:bg-accent-light on-dark:text-ink"
        >
          ✓
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
