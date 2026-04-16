import { useState } from 'react'
import { motion } from 'framer-motion'
import { sendMessage } from '../api/client'
import ScrollReveal from '../components/ScrollReveal'

const contactInfo = [
  { icon: '📍', label: 'Location', value: 'Noida, Uttar Pradesh, India' },
  { icon: '📧', label: 'Email', value: 'rahulprakash7086@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91-9258866171' },
  { icon: '💼', label: 'Freelancer', value: 'Available for projects' },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendMessage({ name: form.name, email: form.email, message: `${form.subject}: ${form.message}` })
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: string) =>
    `w-full bg-black border rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-300 ${
      focused === field ? 'border-red-600' : 'border-gray-800 hover:border-gray-600'
    }`

  return (
    <section id="contact" className="min-h-screen px-6 py-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-2 text-center">
            Get In <span className="text-red-400">Touch</span>
          </h2>
          <p className="text-gray-500 mb-16 text-center">Let's build something amazing together</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left info panel */}
          <ScrollReveal delay={0.1}>
            <div className="lg:col-span-2 space-y-4">
              <div className="border border-gray-800 rounded-2xl p-6 mb-6"
                style={{ background: 'linear-gradient(135deg, #0d0000 0%, #000 100%)' }}>
                <h3 className="text-xl font-bold mb-2">Rahul <span className="text-red-400">Prakash</span></h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Full stack developer available for freelance projects. Fast delivery, clean code, and clear communication.
                </p>
              </div>

              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ borderColor: '#991b1b', x: 4 }}
                  className="flex items-center gap-4 border border-gray-800 rounded-xl px-4 py-3 transition-all duration-300 cursor-default"
                >
                  <span style={{ fontSize: '18px' }}>{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="text-sm text-gray-300">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social links */}
              <div className="flex gap-3 pt-2">
                {['GitHub', 'LinkedIn', 'Freelancer'].map((s) => (
                  <motion.a
                    key={s}
                    whileHover={{ scale: 1.1, borderColor: '#991b1b' }}
                    href="#"
                    className="flex-1 text-center py-2 border border-gray-800 rounded-lg text-xs text-gray-400 hover:text-red-400 transition-all"
                  >
                    {s}
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right form */}
          <ScrollReveal delay={0.2}>
            <div className="lg:col-span-3">
              <div className="border border-gray-800 rounded-2xl p-8"
                style={{ background: 'linear-gradient(135deg, #050000 0%, #000 100%)' }}>

                {status === 'sent' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">I'll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')}
                      className="mt-6 px-6 py-2 border border-red-800 rounded-lg text-red-400 text-sm hover:bg-red-950 transition">
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Your Name</label>
                        <input
                          type="text" required
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          placeholder="Rahul Prakash"
                          className={inputClass('name')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email" required
                          value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          placeholder="you@example.com"
                          className={inputClass('email')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Subject</label>
                      <input
                        type="text" required
                        value={form.subject}
                        onChange={e => setForm({...form, subject: e.target.value})}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        placeholder="Project inquiry / Collaboration"
                        className={inputClass('subject')}
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                      <textarea
                        rows={5} required
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell me about your project..."
                        className={inputClass('message') + ' resize-none'}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-4 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50"
                      style={{
                        background: 'linear-gradient(135deg, #7f1d1d, #991b1b)',
                        boxShadow: '0 0 20px rgba(185,28,28,0.4)'
                      }}
                    >
                      {status === 'sending' ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>⟳</motion.span>
                          Sending...
                        </span>
                      ) : 'Send Message →'}
                    </motion.button>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}