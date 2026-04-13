import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import ParticleBackground from '../components/ParticleBackground'
import SEO from '../components/SEO'
import { sendMessage } from '../api/client'

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
    <PageTransition>
      <SEO
        title="Contact"
        description="Contact Rahul Prakash — available for freelance full stack development work."
      />

      {/* 👇 Step 1: relative wrapper so particles sit behind content */}
      <div className="relative min-h-screen">

        {/* 👇 Step 2: particles go here — fixed position, z-index 0 */}
        <ParticleBackground />

        {/* 👇 Step 3: all content gets relative + z-10 to sit ON TOP of particles */}
        <section className="relative z-10 px-6 pt-28 pb-20">
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
          </div>
        </section>
      </div>
    </PageTransition>
  )
}