const contacts = [
  {
    label: 'GitHub',
    value: 'Christian0FS',
    href:  'https://github.com/Christian0FS',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'christianfs210108@gmail.com',
    href:  'mailto:christianfs210108@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'christian-ferreira-da-silva',
    href:  'https://www.linkedin.com/in/christian-ferreira-da-silva-79b40b364',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contato" style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-label">Contato</p>
        <h2 className="section-title" style={{ marginBottom: 14 }}>Vamos conversar</h2>
        <p style={{
          color: 'var(--text-secondary)',
          maxWidth: 440, margin: '0 auto 48px',
          fontSize: 'clamp(14px, 2vw, 16px)',
          lineHeight: 1.7,
        }}>
          Aberto a oportunidades, freelas ou só uma troca de ideia técnica. Me manda uma mensagem.
        </p>

        {/* Cards de contato — coluna em mobile, row em desktop */}
        <div style={{
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 72,
        }}>
          {contacts.map(c => (
            <a
              key={c.label}
              href={c.href}
              target="_blank" rel="noreferrer"
              className="card"
              style={{
                padding: '18px 24px',
                display: 'flex', alignItems: 'center', gap: 12,
                flex: '1 1 220px',
                maxWidth: 320,
                textAlign: 'left',
              }}
            >
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{c.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontSize: 10, color: 'var(--text-muted)',
                  textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2,
                }}>
                  {c.label}
                </div>
                <div style={{
                  fontSize: 13, color: 'var(--text-primary)', fontWeight: 500,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Rodapé */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13, color: 'var(--accent)',
          }}>
            christian.dev
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Christian Ferreira da Silva
          </span>
        </div>
      </div>
    </section>
  )
}
