import { useEffect, useState } from 'react'
import { getRepos } from '../services/github'

const PINNED = ['biblioteca', 'portfolio-christian']

const langColor = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  PHP:        '#777bb4',
  Python:     '#3776ab',
  C:          '#a8b9cc',
  HTML:       '#e34c26',
  CSS:        '#264de4',
}

function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank" rel="noreferrer"
      className="card"
      style={{
        padding: 'clamp(18px,3vw,24px)',
        display: 'flex', flexDirection: 'column',
        cursor: 'pointer',
        minHeight: 160,
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', gap: 8, marginBottom: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, minWidth: 0 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="var(--text-muted)" strokeWidth="2" style={{ flexShrink: 0 }}>
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M9 3v18M3 9h6M3 15h6"/>
          </svg>
          <span style={{
            fontWeight: 600, fontSize: 14, color: 'var(--text-primary)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {repo.name}
          </span>
        </div>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="var(--text-muted)" strokeWidth="2" style={{ flexShrink: 0 }}>
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>

      {/* Descrição */}
      <p style={{
        fontSize: 13, color: 'var(--text-secondary)',
        lineHeight: 1.6, flex: 1, marginBottom: 18,
      }}>
        {repo.description || 'Sem descrição.'}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {repo.language && (
            <>
              <span style={{
                width: 9, height: 9, borderRadius: '50%',
                background: langColor[repo.language] || '#888',
                display: 'inline-block', flexShrink: 0,
              }} />
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{repo.language}</span>
            </>
          )}
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          {[
            { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', val: repo.stargazers_count },
            { icon: 'M12 18a3 3 0 100-6 3 3 0 000 6zM6 6a3 3 0 100-6 3 3 0 000 6zM18 6a3 3 0 100-6 3 3 0 000 6zM18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9M12 12v3', val: repo.forks_count },
          ].map((item, i) => (
            <span key={i} style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={item.icon}/>
              </svg>
              {item.val}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  const [repos,   setRepos]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    getRepos()
      .then(data => {
        const sorted = data
          .filter(r => !r.fork)
          .sort((a, b) => {
            const pa = PINNED.indexOf(a.name)
            const pb = PINNED.indexOf(b.name)
            if (pa !== -1 && pb !== -1) return pa - pb
            if (pa !== -1) return -1
            if (pb !== -1) return 1
            return b.stargazers_count - a.stargazers_count
          })
          .slice(0, 6)
        setRepos(sorted)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="projetos">
      <div className="container">
        <p className="section-label">Projetos</p>
        <h2 className="section-title">Do que tenho construído</h2>
        <div className="divider" />

        {loading && (
          <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '56px 0', fontSize: 14 }}>
            Carregando repositórios…
          </div>
        )}

        {error && (
          <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '40px 0', fontSize: 14 }}>
            Não foi possível carregar os projetos.<br />
            <a href="https://github.com/Christian0FS" target="_blank" rel="noreferrer"
              style={{ color: 'var(--accent)' }}>
              Acesse o GitHub diretamente →
            </a>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Grid: 3 cols desktop, 2 tablet, 1 mobile */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(12px, 2.5vw, 20px)',
              marginBottom: 36,
            }}>
              {repos.map(r => <RepoCard key={r.id} repo={r} />)}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a
                href="https://github.com/Christian0FS?tab=repositories"
                target="_blank" rel="noreferrer"
                className="btn-outline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                Ver todos no GitHub
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
