/**
 * Sends the contact form to the SES-backed endpoint (API Gateway + Lambda).
 * Single integration point: to change providers, change this function only.
 */
export async function sendContactMessage(formEl: HTMLFormElement): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
  if (!endpoint) {
    throw new Error('Contact form is not configured.')
  }

  const data = new FormData(formEl)
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: data.get('user_name'),
      email: data.get('user_email'),
      message: data.get('message'),
    }),
  })

  if (!res.ok) {
    throw new Error('Could not send your message. Please try again.')
  }
}
