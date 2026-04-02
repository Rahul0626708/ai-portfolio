import { useState } from 'react'
import { sendMessage } from '../api/client.ts'

export default function Contact() {
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
    <section className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Contact</h2>
        <p className="text-gray-400 mb-10">Let's work together</p>

        {status === 'sent' && (
          <div className="bg-green-900 border border-green-700 text-green-300 rounded-lg p-4 mb-6">
            Message sent! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text" required
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email" required
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea
              rows={5} required
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 transition disabled:opacity-50">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}