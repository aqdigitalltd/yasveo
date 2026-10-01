import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const NotFound = () => (
  <section className="flex flex-1 flex-col justify-center px-gutter py-section">
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
      <p className="eyebrow text-muted">404 · Not found</p>
      <h1 className="display-hero mt-6 max-w-[16ch]">This page isn&apos;t the right fit.</h1>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/brands">I&apos;m a Brand</ButtonLink>
        <ButtonLink href="/creators" variant="outline">
          I&apos;m a Creator
        </ButtonLink>
      </div>
    </div>
  </section>
);

export default NotFound;
