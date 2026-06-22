export default function About() {
  const areaCards = [
    { icon: '⚡', title: 'Back-end',       desc: 'PHP, Laravel, Node.js, APIs REST' },
    { icon: '🎨', title: 'Front-end',      desc: 'React, JavaScript, Tailwind CSS'  },
    { icon: '🗄️', title: 'Banco de dados', desc: 'MySQL, modelagem relacional'       },
    { icon: '🔧', title: 'Ferramentas',    desc: 'Git, Linux, CI/CD básico'          },
  ]

  return (
    <section id="sobre">
      <div className="container">
        {/* Grid: 2 col em desktop, 1 col em mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(40px, 8vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Texto */}
          <div>
            <p className="section-label">Sobre mim</p>
            <h2 className="section-title">Construindo soluções que fazem sentido</h2>
            <div className="divider" />

            <p style={{ color: 'var(--text-secondary)', marginBottom: 18, lineHeight: 1.85 }}>
              Sou desenvolvedor focado em criar aplicações web robustas, desde o back-end com PHP e Laravel até interfaces modernas com React. Gosto de problemas que exigem clareza na arquitetura.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              Atualmente estudando Ciência da Computação, conciliando projetos práticos com aprofundamento em estruturas de dados, algoritmos e matemática aplicada.
            </p>

            <div style={{ marginTop: 36 }}>
              <a
                href="https://github.com/Christian0FS"
                target="_blank" rel="noreferrer"
                className="btn-outline"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                Ver GitHub
              </a>
            </div>
          </div>

          {/* Cards de área */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 14,
          }}>
            {areaCards.map(item => (
              <div key={item.title} className="card" style={{ padding: 'clamp(16px,3vw,24px) clamp(14px,2.5vw,20px)' }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: 'var(--text-primary)' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
