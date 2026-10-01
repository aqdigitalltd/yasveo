"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button/Button";
import { FormError, FormSuccess } from "@/components/FormControls/FormStatus";
import { Input } from "@/components/FormControls/Input";
import { Textarea } from "@/components/FormControls/Textarea";
import { creatorAction } from "@/config/SiteConfig";
import {
  creatorApplicationFields as fields,
  creatorApplicationRules as rules,
  emptyCreatorApplication,
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
          message: "Sorry, your details didn't send. Please try again in a moment.",
        });
      }
    },
    [setError],
  );

  if (isSubmitSuccessful && !errors.root) {
    return (
      <FormSuccess
        title={`Thank you, ${getValues("name").trim()}. We've got your details.`}
        message="We'll take a look at your content and get in touch by email where there's a suitable fit."
      />
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="creator-name"
          label={fields.name.label}
          placeholder={fields.name.placeholder}
          autoComplete="name"
          error={errors.name?.message}
          {...register("name", rules.name)}
        />
        <Input
          id="creator-email"
          type="email"
          label={fields.email.label}
          placeholder={fields.email.placeholder}
          autoComplete="email"
          error={errors.email?.message}
          {...register("email", rules.email)}
        />
      </div>
      <Input
        id="creator-profile"
        label={fields.profile.label}
        placeholder={fields.profile.placeholder}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        error={errors.profile?.message}
        {...register("profile", rules.profile)}
      />
      <Textarea
        id="creator-content"
        label={fields.content.label}
        placeholder={fields.content.placeholder}
        error={errors.content?.message}
        {...register("content", rules.content)}
      />

      <FormError message={errors.root?.message} />

      <Button type="submit" withArrow disabled={isSubmitting} aria-busy={isSubmitting} className="mt-2 w-full">
        {isSubmitting ? "Sending…" : creatorAction.label}
      </Button>
      <p className="text-sm text-muted">
        Joining doesn&apos;t commit you to anything. We&apos;ll only use these details to get in touch.
      </p>
    </form>
  );
};
