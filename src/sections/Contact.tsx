import { FormEvent, useRef, useState } from 'react'
import { ArrowUpRight, Check, Github, Mail } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { sendContactMessage } from '../lib/sendContactMessage'

const FIELD =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-accent-fuchsia focus:outline-none focus:ring-2 focus:ring-accent-fuchsia/20'

export function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.current) return
    setSending(true)
    setError('')
    try {
      await sendContactMessage(form.current)
      setSent(true)
      form.current.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Have a role, a project, or just want to say hi? Drop me a line."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <form ref={form} onSubmit={handleSubmit} className="glass space-y-4 rounded-3xl p-6 sm:p-8">
            <input className={FIELD} name="user_name" placeholder="Your name" required />
            <input className={FIELD} name="user_email" type="email" placeholder="you@email.com" required />
            <textarea className={`${FIELD} resize-none`} name="message" rows={5} placeholder="Your message" required />
            {error && <p className="text-sm font-medium text-red-400">{error}</p>}
            <button type="submit" disabled={sending || sent} className="btn btn-primary w-full py-3">
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Sent, thanks!
                </>
              ) : sending ? (
                'Sending…'
              ) : (
                'Send message'
              )}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center gap-4">
            <a
              href="mailto:jorge.a.garcia12@gmail.com"
              className="group glass flex items-center justify-between rounded-2xl p-5 transition-colors hover:bg-white/10"
            >
              <span className="flex items-center gap-3 font-medium text-white">
                <Mail className="h-5 w-5 text-accent-fuchsia" /> Email me
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
            </a>
            <a
              href="https://github.com/george-garcia"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass flex items-center justify-between rounded-2xl p-5 transition-colors hover:bg-white/10"
            >
              <span className="flex items-center gap-3 font-medium text-white">
                <Github className="h-5 w-5 text-accent-cyan" /> GitHub
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
