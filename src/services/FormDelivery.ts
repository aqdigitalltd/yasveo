import type { FormSubmissionType } from "@/types/forms";

// The one place a delivery provider plugs in. Forms never call a provider directly.
//
// To connect EmailJS, for example: `npm i @emailjs/browser`, then replace the mock below with
//   await emailjs.send(SERVICE_ID, TEMPLATE_ID, { subject, reply_to, message: formatAsText(fields) }, { publicKey })
// A server-side option (Server Action + SMTP/Resend) can replace this function the same way.
// Throw on failure; the forms show their error state for any thrown error.

const mockDelay = 900;

export const deliverSubmission = async (submission: FormSubmissionType): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, mockDelay));

  if (process.env.NODE_ENV === "development") {
    console.info(`[${submission.form}] ${submission.subject}`, submission.fields);
  }
};
