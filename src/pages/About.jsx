import { Link } from 'react-router-dom'
import { profile } from '../data/content'

function About() {
  const { about, skills } = profile

  return (
    <section className="section about">
      <Link className="back-link" to="/">
        ← Back
      </Link>
      <h2 className="section__title">About</h2>

      <div className="about__block">
        <p className="about__lede">{about.greeting}</p>
        <p>{about.intro}</p>
      </div>

      {about.sections.map((s) => (
        <div className="about__block" key={s.heading}>
          <h3>{s.heading}</h3>
          <p>{s.text}</p>
          {s.languages && <p className="about__target">Languages: {s.languages}</p>}
        </div>
      ))}

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
