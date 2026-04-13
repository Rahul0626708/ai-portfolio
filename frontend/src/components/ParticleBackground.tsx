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
          number: { value: 80, density: { enable: true, area: 600 } },
          color: { value: ['#ff2200', '#ff6600', '#ff0044', '#ffffff'] },
          shape: { type: ['circle', 'triangle'] },
          opacity: {
            value: 0.8,
            animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false }
          },
          size: {
            value: { min: 2, max: 8 },
            animation: { enable: true, speed: 3, minimumValue: 1, sync: false }
          },
          links: {
            enable: true,
            distance: 160,
            color: '#ff3300',
            opacity: 0.5,
            width: 1.5,
            triangles: { enable: true, color: '#ff220022', opacity: 0.1 }
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' },
          },
          twinkle: {
            particles: { enable: true, frequency: 0.05, opacity: 1, color: { value: '#ffffff' } },
            lines: { enable: true, frequency: 0.005, opacity: 0.5, color: { value: '#ff4400' } }
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 6 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}