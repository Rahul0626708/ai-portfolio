import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

export default function ParticleBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={init}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          color: { value: '#7F77DD' },
          links: {
            color: '#7F77DD',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          number: { density: { enable: true, area: 800 }, value: 60 },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  )
}