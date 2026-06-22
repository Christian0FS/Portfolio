export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      {/* Blue glow */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '60%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div className="fade-up" style={{ marginBottom: 16 }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
          }}>
            &gt; Olá, eu sou
          </span>
        </div>

        <h1 className="fade-up-d1" style={{
          fontSize: 'clamp(40px, 7vw, 80px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          marginBottom: 16,
        }}>
          Christian<br />
          <span style={{ color: 'var(--accent)' }}>Ferreira</span> da Silva
        </h1>

        <p className="fade-up-d2" style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: 'var(--text-secondary)',
          maxWidth: 520,
          marginBottom: 48,
          lineHeight: 1.6,
        }}>
          Desenvolvedor Full Stack — PHP, JavaScript, React e APIs REST.<br />
          Construindo sistemas web sólidos e escaláveis.
        </p>

        <div className="fade-up-d3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="#projetos" className="btn-primary">
            Ver projetos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contato" className="btn-outline">Entre em contato</a>
        </div>

        <div className="fade-up-d4" style={{ marginTop: 80, display: 'flex', gap: 32 }}>
          {[
            { num: 'PHP', sub: 'Laravel' },
            { num: 'JS', sub: 'React · Node' },
            { num: 'SQL', sub: 'MySQL · APIs' },
          ].map(item => (
            <div key={item.num}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 20, fontWeight: 700,
                color: 'var(--text-primary)',
              }}>{item.num}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
