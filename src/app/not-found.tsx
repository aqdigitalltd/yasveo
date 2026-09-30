import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink/ArrowLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const NotFound = () => (
  <section className="flex min-h-[80vh] flex-col justify-center px-gutter pt-[calc(var(--spacing-header)+2rem)] pb-section">
    <p className="eyebrow text-muted">404 — Not found</p>
    <h1 className="display-xl mt-8 max-w-[14ch]">
      This page <em>isn&apos;t the right fit.</em>
    </h1>
    <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
      <ArrowLink href="/">Back to home</ArrowLink>
      <ArrowLink href="/brands">For Brands</ArrowLink>
      <ArrowLink href="/creators">For Creators</ArrowLink>
    </div>
  </section>
);

export default NotFound;
