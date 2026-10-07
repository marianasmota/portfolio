import { Link } from 'react-router-dom'
import { profile } from '../data/content'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="header">
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
