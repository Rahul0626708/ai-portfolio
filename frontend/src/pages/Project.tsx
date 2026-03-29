import { useQuery } from '@tanstack/react-query'
import { getProjects } from '../api/client'

interface Project {
  id: string
  title: string
  description: string
  techStack: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export default function Projects() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects().then(r => r.data)
  })

  return (
    <section className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Projects</h2>
        <p className="text-gray-400 mb-10">Things I've built</p>

        {isLoading && <p className="text-gray-400">Loading projects...</p>}
        {isError && <p className="text-red-400">Could not load projects.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.map((project: Project) => (
            <div key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">
              {project.featured && (
                <span className="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded mb-3 inline-block">
                  Featured
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <p className="text-xs text-gray-500 mb-4">{project.techStack}</p>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank"
                    className="text-sm text-purple-400 hover:text-purple-300">
                    GitHub →
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank"
                    className="text-sm text-green-400 hover:text-green-300">
                    Live →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}