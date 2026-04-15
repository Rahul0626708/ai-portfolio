import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    radius: 120,
    speed: 20,
    skills: ["React", "TypeScript", "Tailwind", "JavaScript"]
  },
  {
    name: "Backend",
    radius: 180,
    speed: 30,
    skills: ["Node", "Python", "FastAPI", "Spring"]
  },
  {
    name: "Database",
    radius: 240,
    speed: 40,
    skills: ["MongoDB", "PostgreSQL", "Docker", "Git"]
  }
];

export default function SkillsSection() {
  return (
    <section className="h-screen bg-black flex items-center justify-center overflow-hidden relative">

      {/* 🌌 Stars Background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

      <div className="relative w-[700px] h-[700px]">

        {/* ☀️ Sun */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-28 h-28 rounded-full flex items-center justify-center
          text-white font-bold text-lg
          bg-red-700 shadow-[0_0_60px_rgba(255,0,0,0.9)]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          My Stack
        </motion.div>

        {/* 🪐 Orbits */}
        {categories.map((cat, i) => (
          <div key={cat.name}>

            {/* Orbit Ring */}
            <div
              className="absolute top-1/2 left-1/2 border border-gray-700 rounded-full"
              style={{
                width: cat.radius * 2,
                height: cat.radius * 2,
                transform: "translate(-50%, -50%)"
              }}
            />

            {/* Planets */}
            {cat.skills.map((skill, index) => {
              const angle = (index / cat.skills.length) * 360;

              return (
                <motion.div
                  key={skill}
                  className="absolute top-1/2 left-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: cat.speed,
                    ease: "linear"
                  }}
                >
                  <div
                    style={{
                      transform: `rotate(${angle}deg) translateX(${cat.radius}px)`
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.3,
                        boxShadow: "0px 0px 25px rgba(255,0,0,0.9)"
                      }}
                      className="
                        px-4 py-2 text-sm
                        rounded-xl border border-gray-500
                        bg-black text-gray-300
                        cursor-pointer
                        transition-all duration-300
                        hover:bg-red-900 hover:text-white hover:border-red-600
                      "
                    >
                      {skill}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}

      </div>
    </section>
  );
}