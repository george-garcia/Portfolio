import emailjs from '@emailjs/browser'

/**
 * Single integration point for sending a contact-form message.
 *
 * Today this uses EmailJS (client-side). When the AWS SES path is ready, swap
 * the body of this function for a `fetch()` POST to an SES-backed endpoint
 * (e.g. API Gateway + Lambda). Callers do not need to change.
 */
export async function sendContactMessage(formEl: HTMLFormElement): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service is not configured.')
  }

  await emailjs.sendForm(serviceId, templateId, formEl, { publicKey })
}
