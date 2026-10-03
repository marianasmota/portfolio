import { profile } from '../data/content'

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">{profile.role}</p>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__tagline">{profile.tagline}</p>
      <div className="hero__actions">
        <a className="button button--primary" href="#projects">
          See my work
        </a>
        <a className="button" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero
