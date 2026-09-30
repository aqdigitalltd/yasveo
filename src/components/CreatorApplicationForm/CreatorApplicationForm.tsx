"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button/Button";
import { ChoiceGroup } from "@/components/FormControls/ChoiceGroup";
import { FormError, FormStep, FormSuccess } from "@/components/FormControls/FormStatus";
import { Input } from "@/components/FormControls/Input";
import { Select } from "@/components/FormControls/Select";
import { Textarea } from "@/components/FormControls/Textarea";
import {
  audienceSizeOptions,
  creatorApplicationLabels as labels,
  creatorApplicationRules as rules,
  emptyCreatorApplication,
  nicheOptions,
  platformOptions,
} from "@/content/FormFields";
import { submitCreatorApplication } from "@/services/FormSubmissions";
import type { CreatorApplicationValuesType } from "@/types/forms";

export const CreatorApplicationForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CreatorApplicationValuesType>({ defaultValues: emptyCreatorApplication });

  const onSubmit = useCallback(
    async (values: CreatorApplicationValuesType) => {
      try {
        await submitCreatorApplication(values);
      } catch {
        setError("root", {
          message: "Sorry, your application didn't send. Please try again in a moment.",
        });
      }
    },
    [setError],
  );

  if (isSubmitSuccessful && !errors.root) {
    return (
      <FormSuccess
        title={
          <>
            Thank you, {getValues("firstName").trim()}. <em>We&apos;ll take a proper look.</em>
          </>
        }
        message="We spend time with every application. If we think there's a good fit with brands we're speaking to, we'll be in touch to talk it through."
      />
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
      <FormStep title="About you" description="So we know who to reply to.">
        <Input
          id="creator-first-name"
          label={labels.firstName}
          autoComplete="given-name"
          error={errors.firstName?.message}
          {...register("firstName", rules.firstName)}
        />
        <Input
          id="creator-last-name"
          label={labels.lastName}
          autoComplete="family-name"
          error={errors.lastName?.message}
          {...register("lastName", rules.lastName)}
        />
        <Input
          id="creator-email"
          type="email"
          label={labels.email}
          autoComplete="email"
          error={errors.email?.message}
          {...register("email", rules.email)}
        />
        <Input
          id="creator-location"
          label={labels.location}
          placeholder="City, country"
          autoComplete="address-level2"
          error={errors.location?.message}
          {...register("location", rules.location)}
        />
      </FormStep>

      <FormStep title="Where you create" description="Where we can see your work.">
        <Select
          id="creator-platform"
          label={labels.primaryPlatform}
          options={platformOptions}
          error={errors.primaryPlatform?.message}
          {...register("primaryPlatform", rules.primaryPlatform)}
        />
        <Input
          id="creator-profile"
          label={labels.profileUrl}
          placeholder="@yourname or a link"
          error={errors.profileUrl?.message}
          {...register("profileUrl", rules.profileUrl)}
        />
        <div className="sm:col-span-2">
          <Input
            id="creator-other-profiles"
            label={labels.otherProfiles}
            optional
            placeholder="Any other channels, separated by commas"
            error={errors.otherProfiles?.message}
            {...register("otherProfiles", rules.otherProfiles)}
          />
        </div>
        <div className="sm:col-span-2">
          <Select
            id="creator-audience-size"
            label={labels.audienceSize}
            optional
            hint="Useful context. Never the deciding factor."
            options={audienceSizeOptions}
            {...register("audienceSize", rules.audienceSize)}
          />
        </div>
      </FormStep>

      <FormStep title="Your work" description="What you make and who it’s for.">
        <div className="sm:col-span-2">
          <ChoiceGroup
            id="creator-niches"
            legend={labels.niches}
            hint="Choose any that apply."
            options={nicheOptions}
            error={errors.niches?.message}
            registration={register("niches", rules.niches)}
          />
        </div>
        <div className="sm:col-span-2">
          <Textarea
            id="creator-content"
            label={labels.contentDescription}
            placeholder="What you make, who it's for and what your audience comes to you for."
            error={errors.contentDescription?.message}
            {...register("contentDescription", rules.contentDescription)}
          />
        </div>
        <div className="sm:col-span-2">
          <Textarea
            id="creator-brand-interests"
            label={labels.brandInterests}
            optional
            rows={2}
            placeholder="Brands you already love, categories you'd like to work in, or anything you'd rather avoid."
            error={errors.brandInterests?.message}
            {...register("brandInterests", rules.brandInterests)}
          />
        </div>
      </FormStep>

      <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row-reverse sm:items-center sm:justify-between">
        <p className="max-w-[40ch] text-sm text-muted">
          Applying starts a conversation. It doesn&apos;t commit you to anything, and we&apos;ll only use these
          details to reply.
        </p>
        <Button type="submit" withArrow disabled={isSubmitting} aria-busy={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Sending…" : "Send application"}
        </Button>
      </div>

      <FormError message={errors.root?.message} />
    </form>
  );
};
