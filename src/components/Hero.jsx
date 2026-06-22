export default function Hero() {
  return (
    <section style={{
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 60, // altura da navbar
    }}>
      {/* Grid sutil */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '15%', right: '-10%',
        width: 'clamp(300px, 50vw, 600px)',
        height: 'clamp(300px, 50vw, 600px)',
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', paddingTop: 40, paddingBottom: 40 }}>
        {/* Eyebrow */}
        <div className="fade-up" style={{ marginBottom: 16 }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13, color: 'var(--accent)', letterSpacing: '0.1em',
          }}>
            &gt; Olá, eu sou
          </span>
        </div>

        {/* Nome */}
        <h1 className="fade-up-d1" style={{
          fontSize: 'clamp(36px, 8vw, 80px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          marginBottom: 16,
        }}>
          Christian<br />
          <span style={{ color: 'var(--accent)' }}>Ferreira</span> da Silva
        </h1>

        {/* Subtítulo */}
        <p className="fade-up-d2" style={{
          fontSize: 'clamp(15px, 2.5vw, 19px)',
          color: 'var(--text-secondary)',
          maxWidth: 520,
          marginBottom: 40,
          lineHeight: 1.65,
        }}>
          Desenvolvedor Full Stack — PHP, JavaScript, React e APIs REST.<br />
          Construindo sistemas web sólidos e escaláveis.
        </p>

        {/* CTAs */}
        <div className="fade-up-d3" style={{
          display: 'flex', gap: 12, flexWrap: 'wrap',
        }}>
          <a href="#projetos" className="btn-primary">
            Ver projetos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contato" className="btn-outline">Entre em contato</a>
        </div>

        {/* Stack pills */}
        <div className="fade-up-d4" style={{
          marginTop: 64,
          display: 'flex', gap: 'clamp(20px, 5vw, 36px)',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'PHP',  sub: 'Laravel' },
            { label: 'JS',   sub: 'React · Node' },
            { label: 'SQL',  sub: 'MySQL · APIs' },
          ].map(item => (
            <div key={item.label}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(16px, 3vw, 20px)',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}>{item.label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
