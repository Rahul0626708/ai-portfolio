import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

export default function GalaxyBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={init}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      options={{
        background: { color: { value: '#000000' } },
        fpsLimit: 60,
        particles: {
          number: { value: 250, density: { enable: true, area: 800 } },
          color: { value: ['#ffffff', '#ffe4b5', '#ffd700', '#ff6b6b', '#87ceeb', '#dda0dd'] },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.05, max: 0.9 },
            animation: { enable: true, speed: 0.8, sync: false }
          },
          size: {
            value: { min: 0.3, max: 2.5 },
            animation: { enable: true, speed: 1, sync: false }
          },
          links: { enable: false },
          move: {
            enable: true,
            speed: { min: 0.05, max: 0.3 },
            direction: 'none',
            random: true,
            outModes: { default: 'out' },
          },
        },
        emitters: [
          {
            position: { x: 10, y: 10 },
            rate: { quantity: 1, delay: 1.5 },
            particles: {
              color: { value: ['#ffffff', '#ffd700', '#87ceeb'] },
              opacity: { value: 1 },
              size: { value: { min: 1, max: 2 } },
              move: {
                enable: true,
                speed: { min: 8, max: 20 },
                direction: 'bottom-right',
                straight: true,
                outModes: { default: 'destroy' },
                trail: { enable: true, length: 25, fillColor: { value: '#000000' } },
              },
              life: { duration: { value: 2 }, count: 1 },
            },
          },
          {
            position: { x: 90, y: 5 },
            rate: { quantity: 1, delay: 2.5 },
            particles: {
              color: { value: ['#ffffff', '#ff6b6b', '#ffd700'] },
              opacity: { value: 1 },
              size: { value: { min: 1, max: 3 } },
              move: {
                enable: true,
                speed: { min: 10, max: 25 },
                direction: 'bottom-left',
                straight: true,
                outModes: { default: 'destroy' },
                trail: { enable: true, length: 30, fillColor: { value: '#000000' } },
              },
              life: { duration: { value: 2 }, count: 1 },
            },
          },
        ],
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'bubble' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            bubble: { distance: 200, size: 4, opacity: 1, duration: 0.3 },
            push: { quantity: 8 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}