import PageTransition from '../components/PageTransition'
import { useQuery } from '@tanstack/react-query'
import { getSkills } from '../api/client.ts'
import SEO from '../components/SEO'

interface Skill {
  id: string
  name: string
  category: string
  level: number
}

const categoryColors: Record<string, string> = {
  Frontend: 'bg-blue-900 text-blue-300',
  Backend: 'bg-green-900 text-green-300',
  Database: 'bg-yellow-900 text-yellow-300',
  DevOps: 'bg-red-900 text-red-300',
}

export default function Skills() {
  const { data, isLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: () => getSkills().then((r: any) => r.data)
  })

  const grouped = data?.reduce((acc: Record<string, Skill[]>, skill: Skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
  <PageTransition>
    <SEO
       title="Home"
       description="Hire a full stack developer skilled in React, Python, Spring Boot and AI."
       />

    <section className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Skills</h2>
        <p className="text-gray-400 mb-10">My technical toolkit</p>
        {isLoading && <p className="text-gray-400">Loading skills...</p>}
        {grouped && Object.entries(grouped).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {(skills as Skill[]).map(skill => (
                <div key={skill.id}
                  className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${categoryColors[skill.category] || 'bg-gray-800 text-gray-300'}`}>
                    {skill.category}
                  </span>
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-yellow-400 text-sm">{'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
     </PageTransition>
  )
}
export function SkeletonPill() {
  return (
    <div className="h-10 w-28 bg-gray-800 rounded-lg animate-pulse"></div>
    
  )
}