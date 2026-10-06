import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, workFilters } from '../data/content'
import { caseStudies } from '../data/caseStudies'

function Work() {
  const [active, setActive] = useState(workFilters[workFilters.length - 1].label)

  const activeFilter = workFilters.find((f) => f.label === active)
  const visible = activeFilter?.ids
    ? projects.filter((p) => activeFilter.ids.includes(p.id))
    : projects

  return (
    <section className="section work">
      <nav className="work__filters">
        {workFilters.map((f) => (
          <button
            key={f.label}
            type="button"
            className={`work__filter${f.label === active ? ' is-active' : ''}`}
            onClick={() => setActive(f.label)}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <div className="work__grid">
        {visible.map((project) => {
          const hasCase = Boolean(caseStudies[project.id])
          const Wrapper = hasCase ? Link : 'div'
          const wrapperProps = hasCase ? { to: `/work/${project.id}` } : {}

          return (
            <Wrapper className="work-card" key={project.id} {...wrapperProps}>
              <div className="work-card__image">
                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt="" />
                <div className="work-card__overlay" aria-hidden="true" />
              </div>
              <h3 className="work-card__name">{project.name}</h3>
              <p className="work-card__skills">{project.tags.join(', ')}</p>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}

export default Work
