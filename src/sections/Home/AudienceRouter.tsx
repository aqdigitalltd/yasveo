import { ButtonLink, type ButtonVariant } from "@/components/Button/Button";
import { ConnectionLines } from "@/components/ConnectionLines/ConnectionLines";
import { LogoMark } from "@/components/Logo/Logo";
import type { NavItemType } from "@/types/settings";

interface IAudienceRoute extends NavItemType {
  variant: ButtonVariant;
}

// Two buttons, not cards: one colour, told apart by style. Brand is filled; Creator is white with the accent border.
const audienceRoutes: IAudienceRoute[] = [
  { href: "/brands", label: "I'm a Brand", variant: "solid" },
  { href: "/creators", label: "I'm a Creator", variant: "outline" },
];

/**
 * The whole home page: one headline, one sentence and the two routes. Its only job is to route the visitor,
 * so the copy stays neutral and speaks to brands and creators equally.
 */
export const AudienceRouter = () => (
  <section className="relative isolate flex flex-1 items-center overflow-hidden px-gutter py-[clamp(56px,8vw,112px)]">
    <ConnectionLines />
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
      <LogoMark className="h-10 w-auto sm:h-12" />
      <h1 className="display-hero mt-8 max-w-[20ch]">Where brands and creators find the right fit.</h1>
      <p className="body-lg mt-6 max-w-xl text-charcoal">
        YASVEO connects brands and creators through audience, content and genuine relevance.
      </p>

      <ul className="mt-10 grid w-full max-w-xl gap-4 sm:grid-cols-2">
        {audienceRoutes.map((route) => (
          <li key={route.href}>
            <ButtonLink href={route.href} variant={route.variant} size="lg" className="w-full">
              {route.label}
            </ButtonLink>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
