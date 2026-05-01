import { useEffect, useRef } from 'react'

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let animId: number
    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    window.addEventListener('resize', () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    })

    // ── STARS ──────────────────────────────────────────────
    const stars = Array.from({ length: 400 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.002,
      color: ['#ffffff', '#ffe4b5', '#b0c4de', '#ffd700', '#add8e6'][Math.floor(Math.random() * 5)]
    }))

    // ── NEBULA CLOUDS ──────────────────────────────────────
    const nebulas = Array.from({ length: 6 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 200 + 100,
      color: ['#1a0000', '#0a0010', '#000a1a', '#100005', '#0a0500'][Math.floor(Math.random() * 5)],
      alpha: Math.random() * 0.15 + 0.05
    }))

    // ── SHOOTING STARS ─────────────────────────────────────
    interface Shoot {
      x: number; y: number; vx: number; vy: number
      len: number; alpha: number; life: number; maxLife: number
      color: string; width: number
    }
    const shoots: Shoot[] = []
    const spawnShoot = () => {
      const side = Math.random()
      let x, y, angle
      if (side < 0.5) { x = Math.random() * W * 0.5; y = Math.random() * H * 0.3; angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5 }
      else { x = W * 0.5 + Math.random() * W * 0.5; y = Math.random() * H * 0.3; angle = Math.PI * 0.75 + (Math.random() - 0.5) * 0.5 }
      const speed = Math.random() * 12 + 8
      shoots.push({
        x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        len: Math.random() * 180 + 80,
        alpha: 1, life: 0, maxLife: Math.random() * 60 + 40,
        color: ['#ffffff', '#ffe4b5', '#87ceeb', '#ffd700', '#ff6b6b'][Math.floor(Math.random() * 5)],
        width: Math.random() * 2 + 0.5
      })
    }
    let shootTimer = 0

    // ── ASTEROIDS ──────────────────────────────────────────
    interface Asteroid {
      x: number; y: number; vx: number; vy: number
      size: number; rotation: number; rotSpeed: number
      alpha: number; points: {x:number;y:number}[]
      craters: {x:number;y:number;r:number}[]
      color: string; glowColor: string
    }
    const makeAsteroidShape = (size: number) => {
      const pts = []
      const n = Math.floor(Math.random() * 4) + 7
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2
        const r = size * (0.7 + Math.random() * 0.5)
        pts.push({ x: Math.cos(a) * r, y: Math.sin(a) * r })
      }
      return pts
    }
    const makeCraters = (size: number) => {
      return Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => ({
        x: (Math.random() - 0.5) * size * 0.8,
        y: (Math.random() - 0.5) * size * 0.8,
        r: Math.random() * size * 0.2 + size * 0.05
      }))
    }
    const asteroidColors = [
      { main: '#2a2a2a', glow: 'rgba(80,40,10,0.4)' },
      { main: '#1a1510', glow: 'rgba(60,30,5,0.3)' },
      { main: '#0f1a0f', glow: 'rgba(10,60,10,0.2)' },
      { main: '#1a0f0f', glow: 'rgba(80,10,10,0.3)' },
      { main: '#15151a', glow: 'rgba(20,10,80,0.3)' },
    ]
    const asteroids: Asteroid[] = Array.from({ length: 18 }, () => {
      const size = Math.random() * 28 + 8
      const col = asteroidColors[Math.floor(Math.random() * asteroidColors.length)]
      return {
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.4,
        size, rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        alpha: Math.random() * 0.6 + 0.3,
        points: makeAsteroidShape(size),
        craters: makeCraters(size),
        color: col.main, glowColor: col.glow
      }
    })

    // ── DEEP SPACE DUST ────────────────────────────────────
    const dust = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1 + 0.1,
      alpha: Math.random() * 0.3,
      color: ['#8b0000', '#4a0080', '#001a4a'][Math.floor(Math.random() * 3)]
    }))

    // ── DRAW ASTEROID ──────────────────────────────────────
    const drawAsteroid = (a: Asteroid) => {
      ctx.save()
      ctx.translate(a.x, a.y)
      ctx.rotate(a.rotation)
      ctx.globalAlpha = a.alpha

      // glow
      const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, a.size * 1.8)
      grd.addColorStop(0, a.glowColor)
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.beginPath()
      ctx.arc(0, 0, a.size * 1.8, 0, Math.PI * 2)
      ctx.fill()

      // body
      ctx.beginPath()
      ctx.moveTo(a.points[0].x, a.points[0].y)
      for (let i = 1; i < a.points.length; i++) ctx.lineTo(a.points[i].x, a.points[i].y)
      ctx.closePath()

      const bodyGrd = ctx.createRadialGradient(-a.size * 0.3, -a.size * 0.3, 0, 0, 0, a.size)
      bodyGrd.addColorStop(0, '#3a3530')
      bodyGrd.addColorStop(0.5, a.color)
      bodyGrd.addColorStop(1, '#050505')
      ctx.fillStyle = bodyGrd
      ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 0.5
      ctx.stroke()

      // craters
      a.craters.forEach(c => {
        ctx.beginPath()
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,0,0,0.5)'
        ctx.fill()
        ctx.strokeStyle = 'rgba(255,255,255,0.04)'
        ctx.lineWidth = 0.3
        ctx.stroke()
      })

      // highlight
      ctx.beginPath()
      ctx.arc(-a.size * 0.25, -a.size * 0.25, a.size * 0.2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.06)'
      ctx.fill()

      ctx.restore()
    }

    // ── DRAW SHOOTING STAR ─────────────────────────────────
    const drawShoot = (s: Shoot) => {
      const progress = s.life / s.maxLife
      const alpha = s.alpha * (1 - progress)
      const tailX = s.x - s.vx * (s.len / Math.sqrt(s.vx ** 2 + s.vy ** 2))
      const tailY = s.y - s.vy * (s.len / Math.sqrt(s.vx ** 2 + s.vy ** 2))

      const grd = ctx.createLinearGradient(tailX, tailY, s.x, s.y)
      grd.addColorStop(0, 'transparent')
      grd.addColorStop(0.6, `${s.color}33`)
      grd.addColorStop(1, s.color)

      ctx.save()
      ctx.globalAlpha = alpha
      ctx.strokeStyle = grd
      ctx.lineWidth = s.width
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(tailX, tailY)
      ctx.lineTo(s.x, s.y)
      ctx.stroke()

      // head glow
      const hGrd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 6)
      hGrd.addColorStop(0, s.color)
      hGrd.addColorStop(1, 'transparent')
      ctx.fillStyle = hGrd
      ctx.beginPath()
      ctx.arc(s.x, s.y, 6, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    // ── MAIN LOOP ──────────────────────────────────────────
    const tick = () => {
      // deep black space
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, W, H)

      // nebulas
      nebulas.forEach(n => {
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r)
        grd.addColorStop(0, n.color)
        grd.addColorStop(1, 'transparent')
        ctx.globalAlpha = n.alpha
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1

      // deep dust
      dust.forEach(d => {
        ctx.globalAlpha = d.alpha
        ctx.fillStyle = d.color
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1

      // stars
      stars.forEach(s => {
        s.alpha += s.speed * (Math.random() > 0.5 ? 1 : -1)
        s.alpha = Math.max(0.05, Math.min(1, s.alpha))
        ctx.globalAlpha = s.alpha
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 2)
        grd.addColorStop(0, s.color)
        grd.addColorStop(1, 'transparent')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1

      // asteroids
      asteroids.forEach(a => {
        a.x += a.vx; a.y += a.vy
        a.rotation += a.rotSpeed
        if (a.x < -a.size * 3) a.x = W + a.size
        if (a.x > W + a.size * 3) a.x = -a.size
        if (a.y < -a.size * 3) a.y = H + a.size
        if (a.y > H + a.size * 3) a.y = -a.size
        drawAsteroid(a)
      })

      // shooting stars
      shootTimer++
      if (shootTimer > 80 + Math.random() * 120) { spawnShoot(); shootTimer = 0 }
      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i]
        s.x += s.vx; s.y += s.vy; s.life++
        drawShoot(s)
        if (s.life >= s.maxLife) shoots.splice(i, 1)
      }

      animId = requestAnimationFrame(tick)
    }

    tick()
    return () => { cancelAnimationFrame(animId) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  )
}