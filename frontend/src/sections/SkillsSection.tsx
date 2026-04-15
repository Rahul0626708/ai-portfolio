import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "JavaScript", "Tailwind",
  "Node.js", "Python", "FastAPI", "Spring Boot",
  "MongoDB", "PostgreSQL", "Docker", "GitHub",
  "Machine Learning", "Pandas"
];

export default function SkillsSection() {
  return (
    <section className="h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-[600px] h-[600px]">

        {/* 🌞 Center Sun */}
        <div className="absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          bg-red-700 text-white px-6 py-4 rounded-full
          shadow-[0_0_40px_rgba(255,0,0,0.7)]
          font-bold text-lg z-10">
          My Stack
        </div>

        {/* 🪐 Orbiting Skills */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 360;

          return (
            <motion.div
              key={skill}
              className="absolute top-1/2 left-1/2"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20 + index * 2,
                ease: "linear"
              }}
              style={{
                transformOrigin: "0px 0px",
              }}
            >
              <div
                style={{
                  transform: `rotate(${angle}deg) translateX(220px)`
                }}
              >
                <div
                  className="
                    px-4 py-2 text-sm
                    border border-gray-500
                    rounded-lg bg-black text-gray-300
                    transition-all duration-300
                    cursor-pointer

                    hover:bg-red-900
                    hover:text-white
                    hover:border-red-700
                    hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]
                  "
                >
                  {skill}
                </div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}