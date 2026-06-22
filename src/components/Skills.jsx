const groups = [
  {
    label: 'Back-end',
    skills: [
      { name: 'PHP', level: 85 },
      { name: 'Laravel', level: 80 },
      { name: 'Node.js', level: 65 },
    ]
  },
  {
    label: 'Front-end',
    skills: [
      { name: 'JavaScript', level: 82 },
      { name: 'React', level: 75 },
      { name: 'Tailwind CSS', level: 78 },
    ]
  },
  {
    label: 'Banco & DevOps',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Linux', level: 60 },
    ]
  },
]

const extras = ['REST APIs', 'C', 'Vite', 'Postman', 'SOLID', 'MVC']

function Bar({ name, level }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginBottom: 6, fontSize: 13,
      }}>
        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{name}</span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, color: 'var(--text-muted)',
        }}>{level}%</span>
      </div>
      <div style={{
        height: 4, background: 'var(--border)',
        borderRadius: 2, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${level}%`,
          background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
          borderRadius: 2,
          transition: 'width 1s ease',
        }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <p className="section-label">Habilidades</p>
        <h2 className="section-title">Stack técnico</h2>
        <div className="divider" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {groups.map(g => (
            <div key={g.label} className="card" style={{ padding: '28px 24px' }}>
              <h3 style={{
                fontSize: 12, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: 24,
              }}>
                {g.label}
              </h3>
              {g.skills.map(s => <Bar key={s.name} {...s} />)}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {extras.map(s => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
