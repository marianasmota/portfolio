import { Link } from 'react-router-dom'
import { profile } from '../data/content'

function About() {
  const { professionalBio, personalBio, skills } = profile

  return (
    <section className="section about">
      <Link className="back-link" to="/">
        ← Back
      </Link>
      <h2 className="section__title">About</h2>

      <div className="about__block">
        <p className="about__lede">{professionalBio.oneLine}</p>
        <p>{professionalBio.summary}</p>
        <p>{professionalBio.difference}</p>
        <p className="about__target">{professionalBio.targetRoles}</p>
      </div>

      <div className="about__block about__block--personal">
        <h3>A bit more about me</h3>
        <p>{personalBio}</p>
      </div>

      <div className="about__skills">
        <h3>Skills</h3>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill} className="skill-list__item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
