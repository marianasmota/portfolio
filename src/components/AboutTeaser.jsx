import { Link } from 'react-router-dom'
import { profile } from '../data/content'

function AboutTeaser() {
  return (
    <section id="about" className="section about-teaser">
      <h2 className="section__title">About</h2>
      <p className="about-teaser__text">{profile.aboutTeaser}</p>
      <ul className="focus-list">
        {profile.focusAreas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
      <Link className="about-teaser__link" to="/about">
        Read more →
      </Link>
      <img
        className="about-teaser__gif"
        src={`${import.meta.env.BASE_URL}artificial-intelligence-design-ia.gif`}
        alt="Artificial intelligence, design and information architecture"
      />
    </section>
  )
}

export default AboutTeaser
