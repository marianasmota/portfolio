import { profile } from '../data/content'

function Hero() {
  const { greeting, name, line2, paragraphs } = profile.hero

  return (
    <section className="hero">
      <h1 className="hero__title">
        {greeting}
        <span className="hero__name">{name}</span>,<br />
        {line2}
      </h1>
      {paragraphs.map((text) => (
        <p className="hero__text" key={text}>
          {text}
        </p>
      ))}
    </section>
  )
}

export default Hero
