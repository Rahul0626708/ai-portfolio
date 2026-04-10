import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getProjects } from '../api/client'
import api from '../api/client'

const ADMIN_PASSWORD = 'your-secret-password'

export default function Admin() {
  const [auth, setAuth] = useState(false)
  const [pw, setPw] = useState('')
  const qc = useQueryClient()

  const { data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects().then(r => r.data),
    enabled: auth
  })

  const addProject = useMutation({
    mutationFn: (p: any) => api.post('/api/projects', p),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['projects'] })
  })

  const [form, setForm] = useState({
    title: '', description: '', techStack: '',
    githubUrl: '', liveUrl: '', featured: false
  })

  if (!auth) return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
        <input type="password" placeholder="Password"
          value={pw} onChange={e => setPw(e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white mb-4 focus:outline-none focus:border-purple-500"
        />
        <button onClick={() => pw === ADMIN_PASSWORD && setAuth(true)}
          className="w-full py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-700">
          Login
        </button>
      </div>
    </section>
  )

  return (
    <section className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Admin Dashboard</h2>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold mb-4">Add New Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['title','description','techStack','githubUrl','liveUrl'].map(field => (
              <input key={field} placeholder={field}
                value={(form as any)[field]}
                onChange={e => setForm({...form, [field]: e.target.value})}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
              />
            ))}
            <label className="flex items-center gap-2 text-gray-400 text-sm">
              <input type="checkbox" checked={form.featured}
                onChange={e => setForm({...form, featured: e.target.checked})} />
              Featured
            </label>
          </div>
          <button onClick={() => addProject.mutate(form)}
            className="mt-4 px-6 py-2 bg-purple-600 rounded-lg text-white text-sm hover:bg-purple-700">
            Add Project
          </button>
        </div>

        <h3 className="text-lg font-semibold mb-4">All Projects ({projects?.length || 0})</h3>
        <div className="space-y-3">
          {projects?.map((p: any) => (
            <div key={p.id} className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 flex justify-between items-center">
              <div>
                <p className="font-medium">{p.title}</p>
                <p className="text-sm text-gray-400">{p.techStack}</p>
              </div>
              {p.featured && <span className="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded">Featured</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}