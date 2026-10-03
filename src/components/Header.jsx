import { profile } from '../data/content'

function Header() {
  return (
    <header className="header">
      <a className="header__brand" href="#top">
        {profile.name}
      </a>
      <nav className="header__nav">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
