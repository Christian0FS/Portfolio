import { useState, useEffect } from 'react'

const links = [
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato',  href: '#contato'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloqueia scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 var(--container-pad)',
        background: scrolled ? 'rgba(6,14,30,0.93)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 60,
        }}>
          {/* Logo */}
          <a href="#" onClick={close} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14, fontWeight: 500,
            color: 'var(--accent)',
            letterSpacing: '0.02em',
          }}>
            christian.dev
          </a>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', gap: 28 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${open ? ' open' : ''}`}
            aria-label="Abrir menu"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu${open ? ' open' : ''}`} role="dialog" aria-modal="true">
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
      </div>
    </>
  )
}
