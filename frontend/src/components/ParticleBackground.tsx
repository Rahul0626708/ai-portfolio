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
        background: { color: { value: '#000000' } },
        fpsLimit: 60,
        particles: {
          number: { value: 200, density: { enable: true, area: 800 } },
          color: { value: ['#ffffff', '#ffe4b5', '#ffd700', '#ff4500', '#00bfff'] },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.1, max: 1 },
            animation: { enable: true, speed: 2, startValue: 'random', sync: false }
          },
          size: {
            value: { min: 0.5, max: 3 },
            animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
          },
          links: { enable: false },
          move: {
            enable: true,
            speed: { min: 0.1, max: 0.5 },
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
        },
        emitters: [
          {
            position: { x: 0, y: 0 },
            rate: { quantity: 1, delay: 0.3 },
            particles: {
              shape: { type: 'circle' },
              color: { value: ['#ffffff', '#ffd700', '#00bfff', '#ff4500'] },
              opacity: { value: 1 },
              size: { value: { min: 1, max: 3 } },
              move: {
                enable: true,
                speed: { min: 15, max: 30 },
                direction: 'bottom-right',
                straight: true,
                outModes: { default: 'destroy' },
                trail: {
                  enable: true,
                  length: 20,
                  fillColor: { value: '#000000' },
                },
              },
              life: { duration: { sync: false, value: 1.5 }, count: 1 },
            },
          },
          {
            position: { x: 100, y: 0 },
            rate: { quantity: 1, delay: 0.5 },
            particles: {
              shape: { type: 'circle' },
              color: { value: ['#ffffff', '#ffd700', '#ff69b4'] },
              opacity: { value: 1 },
              size: { value: { min: 2, max: 4 } },
              move: {
                enable: true,
                speed: { min: 10, max: 20 },
                direction: 'bottom-left',
                straight: true,
                outModes: { default: 'destroy' },
                trail: {
                  enable: true,
                  length: 15,
                  fillColor: { value: '#000000' },
                },
              },
              life: { duration: { sync: false, value: 2 }, count: 1 },
            },
          },
        ],
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'bubble' },
            onClick: { enable: true, mode: 'repulse' },
          },
          modes: {
            bubble: { distance: 150, size: 6, opacity: 1, duration: 0.3 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}