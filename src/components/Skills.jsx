import { useEffect, useRef, useState } from 'react'

const groups = [
  {
    label: 'Back-end',
    skills: [
      { name: 'PHP',      level: 85 },
      { name: 'Laravel',  level: 80 },
      { name: 'Node.js',  level: 65 },
    ],
  },
  {
    label: 'Front-end',
    skills: [
      { name: 'JavaScript',   level: 82 },
      { name: 'React',        level: 75 },
      { name: 'Tailwind CSS', level: 78 },
    ],
  },
  {
    label: 'Banco & DevOps',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'Git',   level: 85 },
      { name: 'Linux', level: 60 },
    ],
  },
]

const extras = ['REST APIs', 'C', 'Vite', 'Postman', 'SOLID', 'MVC', 'Linux']

function Bar({ name, level, animate }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginBottom: 5, fontSize: 13,
      }}>
        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{name}</span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: 'var(--text-muted)',
        }}>{level}%</span>
      </div>
      <div style={{ height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: animate ? `${level}%` : '0%',
          background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
          borderRadius: 2,
          transition: 'width 1.1s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref     = useRef(null)
  const [anim, setAnim] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnim(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <p className="section-label">Habilidades</p>
        <h2 className="section-title">Stack técnico</h2>
        <div className="divider" />

        {/* Grid: 3 cols em desktop, 1 em mobile, 2 em tablet */}
        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap: 'clamp(14px, 3vw, 28px)',
        }}>
          {groups.map(g => (
            <div key={g.label} className="card" style={{ padding: 'clamp(20px,3vw,28px) clamp(18px,2.5vw,24px)' }}>
              <h3 style={{
                fontSize: 11, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: 22,
              }}>
                {g.label}
              </h3>
              {g.skills.map(s => <Bar key={s.name} {...s} animate={anim} />)}
            </div>
          ))}
        </div>

        {/* Tags extras */}
        <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 9 }}>
          {extras.map(s => <span key={s} className="tag">{s}</span>)}
        </div>
      </div>
    </section>
  )
}
