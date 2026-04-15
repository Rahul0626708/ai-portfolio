import { useQuery } from '@tanstack/react-query'
import { getProjects } from '../api/client'
import { SkeletonCard } from '../components/Skeleton'
import ScrollReveal from '../components/ScrollReveal'

interface Project {
  id: string
  title: string
  description: string
  techStack: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export default function ProjectsSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects().then(r => r.data)
  })

  return (
    <section id="projects" className="min-h-screen px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-2">My <span className="text-red-400">Projects</span></h2>
          <p className="text-gray-500 mb-10">Things I've built</p>
        </ScrollReveal>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {isError && <p className="text-red-400">Could not load projects.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.map((project: Project, i: number) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition h-full">
                {project.featured && (
                  <span className="text-xs bg-red-900 text-red-300 px-2 py-1 rounded mb-3 inline-block">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <p className="text-xs text-gray-500 mb-4">{project.techStack}</p>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank"
                      className="text-sm text-red-400 hover:text-red-300">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}