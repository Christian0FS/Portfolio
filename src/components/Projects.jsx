import { useEffect, useState } from 'react'
import { getRepos } from '../services/github'

const PINNED = ['biblioteca', 'portfolio-christian']

function RepoCard({ repo }) {
  const langColor = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    PHP: '#777bb4',
    Python: '#3776ab',
    C: '#555555',
    HTML: '#e34c26',
    CSS: '#264de4',
  }

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="card"
      style={{
        padding: '24px',
        display: 'flex', flexDirection: 'column',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
            <path d="M3 3h18v18H3zM9 3v18M3 9h6M3 15h6"/>
          </svg>
          <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>
            {repo.name}
          </span>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
        </svg>
      </div>

      <p style={{
        fontSize: 13, color: 'var(--text-secondary)',
        lineHeight: 1.6, flex: 1, marginBottom: 20,
        minHeight: 40,
      }}>
        {repo.description || 'Sem descrição.'}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {repo.language && (
            <>
              <span style={{
                width: 10, height: 10, borderRadius: '50%',
                background: langColor[repo.language] || '#888',
                display: 'inline-block',
              }} />
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{repo.language}</span>
            </>
          )}
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            {repo.stargazers_count}
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/>
              <path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9M12 12v3"/>
            </svg>
            {repo.forks_count}
          </span>
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
          <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '60px 0', fontSize: 14 }}>
            Carregando repositórios…
          </div>
        )}

        {error && (
          <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '40px 0', fontSize: 14 }}>
            Não foi possível carregar os projetos. <br />
            <a href="https://github.com/Christian0FS" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
              Acesse o GitHub diretamente →
            </a>
          </div>
        )}

        {!loading && !error && (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
              marginBottom: 40,
            }}>
              {repos.map(r => <RepoCard key={r.id} repo={r} />)}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a
                href="https://github.com/Christian0FS?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ display: 'inline-flex' }}
              >
                Ver todos no GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
