const skills = ['React', 'TypeScript', 'Python', 'FastAPI', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Docker']

export default function Skills() {
  return (
    <section className="min-h-screen px-6 pt-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}