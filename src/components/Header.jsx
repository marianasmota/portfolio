import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/content'
import ThemeToggle from './ThemeToggle'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <p className="header__eyebrow">{profile.shortTagline}</p>
      <Link className="header__name" to="/">
        {profile.name}
      </Link>
      <nav className="header__nav">
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/#contact">Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header
