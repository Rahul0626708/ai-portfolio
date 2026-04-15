import { useState } from 'react'
import { sendMessage } from '../api/client'
import ScrollReveal from '../components/ScrollReveal'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendMessage(form)
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="min-h-screen px-6 py-28">
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-2">Get In <span className="text-red-400">Touch</span></h2>
          <p className="text-gray-500 mb-10">Let's work together</p>
        </ScrollReveal>

        {status === 'sent' && (
          <div className="bg-green-900 border border-green-700 text-green-300 rounded-lg p-4 mb-6">
            Message sent! I'll get back to you soon.
          </div>
        )}

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text" required
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email" required
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea
                rows={5} required
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-red-800 rounded-lg text-white font-medium hover:bg-red-900 transition disabled:opacity-50">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}