"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button/Button";
import { FormError, FormSuccess } from "@/components/FormControls/FormStatus";
import { Input } from "@/components/FormControls/Input";
import { Textarea } from "@/components/FormControls/Textarea";
import { brandEnquiryFields as fields, brandEnquiryRules as rules, emptyBrandEnquiry } from "@/content/FormFields";
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
        title={`Thank you, ${getValues("name").trim()}. We'll be in touch.`}
        message="We've got your enquiry and will reply by email to talk through what you're looking for."
      />
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="grid gap-x-5 gap-y-2 sm:grid-cols-2">
        <Input
          id="brand-name"
          label={fields.name.label}
          placeholder={fields.name.placeholder}
          autoComplete="name"
          error={errors.name?.message}
          {...register("name", rules.name)}
        />
        <Input
          id="brand-email"
          type="email"
          label={fields.email.label}
          placeholder={fields.email.placeholder}
          autoComplete="email"
          error={errors.email?.message}
          {...register("email", rules.email)}
        />
      </div>
      <Input
        id="brand-website"
        label={fields.website.label}
        placeholder={fields.website.placeholder}
        inputMode="url"
        autoComplete="url"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        error={errors.website?.message}
        {...register("website", rules.website)}
      />
      <Textarea
        id="brand-message"
        label={fields.message.label}
        placeholder={fields.message.placeholder}
        error={errors.message?.message}
        {...register("message", rules.message)}
      />

      <FormError message={errors.root?.message} />

      <Button type="submit" withArrow disabled={isSubmitting} aria-busy={isSubmitting} className="mt-1 w-full">
        {isSubmitting ? "Sending…" : "Let's talk"}
      </Button>
      <p className="mt-2 text-sm text-muted">We&apos;ll only use these details to reply to your enquiry.</p>
    </form>
  );
};
