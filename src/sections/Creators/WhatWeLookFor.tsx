import Image from "next/image";
import type { ReactNode } from "react";
import { Photo } from "@/components/Photo/Photo";
import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { creatorQualities, type CreatorQualityType } from "@/content/CreatorsContent";

interface IPostIcon {
  children: ReactNode;
  className?: string;
}

const PostIcon = ({ children, className = "" }: IPostIcon) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className={`size-5.5 ${className}`}
  >
    {children}
  </svg>
);

// Decorative "post" framing only: no handles, likes or follower counts, since those would be invented.
const CreatorPost = ({ title, description, niche, format, image }: CreatorQualityType) => (
  <article className="group rounded-[4px] bg-white p-3 shadow-[0_1px_2px_rgb(10_10_10/0.05),0_16px_40px_-20px_rgb(10_10_10/0.2)] ring-1 ring-line transition-[transform,box-shadow] duration-500 ease-editorial hover:-translate-y-1 hover:shadow-[0_1px_2px_rgb(10_10_10/0.05),0_24px_48px_-20px_rgb(10_10_10/0.28)] motion-reduce:transition-none">
    <header className="flex items-center gap-3 px-1 pb-3">
      <span aria-hidden className="rounded-full bg-accent p-0.5">
        <span className="relative block size-9 overflow-hidden rounded-full border-2 border-white bg-mist">
          <Image src={image.src} alt="" fill sizes="36px" className="object-cover" />
        </span>
      </span>
      <span className="leading-tight">
        <span className="block text-[0.9375rem] font-medium">{niche} creator</span>
        <span className="block text-sm text-muted">{format}</span>
      </span>
      <PostIcon className="ml-auto text-muted">
        <circle cx="5" cy="12" r="0.8" fill="currentColor" />
        <circle cx="12" cy="12" r="0.8" fill="currentColor" />
        <circle cx="19" cy="12" r="0.8" fill="currentColor" />
      </PostIcon>
    </header>

    <Photo image={image} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw" className="aspect-4/5 rounded-xs" />

    <div aria-hidden className="flex items-center gap-4 px-1 pt-3.5 text-ink/80">
      <PostIcon className="transition-colors duration-300 group-hover:fill-accent group-hover:text-accent">
        <path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2Z" />
      </PostIcon>
      <PostIcon>
        <path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5Z" />
      </PostIcon>
      <PostIcon>
        <path d="m21 3-9.5 9.5M21 3l-6 18-3.5-8.5L3 9l18-6Z" />
      </PostIcon>
      <PostIcon className="ml-auto">
        <path d="M6 3.5h12v17l-6-4.5-6 4.5v-17Z" />
      </PostIcon>
    </div>

    <div className="px-1 pt-3 pb-2">
      <h3 className="heading-md">{title}</h3>
      <p className="mt-1.5 text-[0.9375rem] text-graphite">{description}</p>
      <p className="mt-2 text-sm font-medium text-muted">#fitoverfollowers</p>
    </div>
  </article>
);

export const WhatWeLookFor = () => (
  <Section id="look-for" labelledBy="look-for-heading" className="pt-0">
    <SectionIntro
      id="look-for-heading"
      eyebrow="What we look for"
      title={
        <>
          It&apos;s not about <em>follower count.</em>
        </>
      }
      description="We work with creators across platforms, formats and audience sizes. What matters is what you make and who it's for."
    />

    {/* A swipeable feed on phones (focusable so keyboard users can scroll it), a grid from sm up. */}
    <ul
      tabIndex={0}
      aria-label="Qualities we look for in creators"
      className="-mx-gutter mt-12 flex snap-x snap-mandatory scroll-px-gutter gap-4 overflow-x-auto px-gutter pt-1 pb-6 sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:items-start sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
    >
      {creatorQualities.map((quality) => (
        <li key={quality.title} className="w-[80%] shrink-0 snap-start sm:w-auto lg:even:mt-12">
          <CreatorPost {...quality} />
        </li>
      ))}
    </ul>
  </Section>
);
