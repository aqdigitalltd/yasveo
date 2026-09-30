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
  brandEnquiryLabels as labels,
  brandEnquiryRules as rules,
  budgetOptions,
  emptyBrandEnquiry,
  partnershipTypeOptions,
  timeframeOptions,
} from "@/content/FormFields";
import { submitBrandEnquiry } from "@/services/FormSubmissions";
import type { BrandEnquiryValuesType } from "@/types/forms";

export const BrandEnquiryForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<BrandEnquiryValuesType>({ defaultValues: emptyBrandEnquiry });

  const onSubmit = useCallback(
    async (values: BrandEnquiryValuesType) => {
      try {
        await submitBrandEnquiry(values);
      } catch {
        setError("root", {
          message: "Sorry, your enquiry didn't send. Please try again in a moment.",
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
            Thank you, {getValues("firstName").trim()}. <em>We&apos;ll be in touch.</em>
          </>
        }
        message="We read every enquiry personally and will reply with some first thoughts, or a few questions, before suggesting a call."
      />
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
      <FormStep title="About you" description="So we know who to reply to.">
        <Input
          id="brand-first-name"
          label={labels.firstName}
          autoComplete="given-name"
          error={errors.firstName?.message}
          {...register("firstName", rules.firstName)}
        />
        <Input
          id="brand-last-name"
          label={labels.lastName}
          autoComplete="family-name"
          error={errors.lastName?.message}
          {...register("lastName", rules.lastName)}
        />
        <Input
          id="brand-email"
          type="email"
          label={labels.email}
          autoComplete="email"
          error={errors.email?.message}
          {...register("email", rules.email)}
        />
        <Input
          id="brand-company"
          label={labels.company}
          autoComplete="organization"
          error={errors.company?.message}
          {...register("company", rules.company)}
        />
        <div className="sm:col-span-2">
          <Input
            id="brand-website"
            label={labels.website}
            optional
            inputMode="url"
            autoComplete="url"
            placeholder="yourbrand.com or @yourbrand"
            error={errors.website?.message}
            {...register("website", rules.website)}
          />
        </div>
      </FormStep>

      <FormStep title="The partnership" description="What you'd like to promote and how.">
        <div className="sm:col-span-2">
          <Input
            id="brand-promoting"
            label={labels.promoting}
            placeholder="A product, a launch, a service, a place…"
            error={errors.promoting?.message}
            {...register("promoting", rules.promoting)}
          />
        </div>
        <div className="sm:col-span-2">
          <ChoiceGroup
            id="brand-partnership-types"
            legend={labels.partnershipTypes}
            hint="Choose any that apply."
            options={partnershipTypeOptions}
            error={errors.partnershipTypes?.message}
            registration={register("partnershipTypes", rules.partnershipTypes)}
          />
        </div>
        <Select
          id="brand-budget"
          label={labels.budget}
          options={budgetOptions}
          error={errors.budget?.message}
          {...register("budget", rules.budget)}
        />
        <Select
          id="brand-timeframe"
          label={labels.timeframe}
          options={timeframeOptions}
          error={errors.timeframe?.message}
          {...register("timeframe", rules.timeframe)}
        />
      </FormStep>

      <FormStep title="Your goals" description="A sentence or two is plenty.">
        <div className="sm:col-span-2">
          <Textarea
            id="brand-goals"
            label={labels.goals}
            placeholder="Who you want to reach, what you want them to feel or do, and how you'll know it worked."
            error={errors.goals?.message}
            {...register("goals", rules.goals)}
          />
        </div>
        <div className="sm:col-span-2">
          <Textarea
            id="brand-additional-info"
            label={labels.additionalInfo}
            optional
            rows={2}
            error={errors.additionalInfo?.message}
            {...register("additionalInfo", rules.additionalInfo)}
          />
        </div>
      </FormStep>

      <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row-reverse sm:items-center sm:justify-between">
        <p className="max-w-[40ch] text-sm text-muted">
          We&apos;ll only use these details to reply to your enquiry.
        </p>
        <Button type="submit" withArrow disabled={isSubmitting} aria-busy={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </Button>
      </div>

      <FormError message={errors.root?.message} />
    </form>
  );
};
