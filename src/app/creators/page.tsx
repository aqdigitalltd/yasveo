import { ButtonLink } from "@/components/Button/Button";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { creatorSteps } from "@/content/CreatorsContent";
import { CreatorApply } from "@/sections/Creators/CreatorApply";
import { CreatorPromise } from "@/sections/Creators/CreatorPromise";
import { CreatorsHero } from "@/sections/Creators/CreatorsHero";
import { WhatWeLookFor } from "@/sections/Creators/WhatWeLookFor";
import { buildMetadata } from "@/utils/Utils";

export const metadata = buildMetadata({
  title: "Brand partnerships for creators",
  description:
    "Brand partnerships that suit your content, your audience and your voice. We look at what you make and who it's for, not just how many people follow you.",
  path: "/creators",
});

const CreatorsPage = () => (
  <>
    <CreatorsHero />
    <WhatWeLookFor />
    <HowItWorks
      title={
        <>
          From application <em>to the right brief.</em>
        </>
      }
      steps={creatorSteps}
      action={<ButtonLink href="#apply">Apply now</ButtonLink>}
    />
    <CreatorPromise />
    <CreatorApply />
  </>
);

export default CreatorsPage;
