import { Link, useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/content'
import { caseStudies } from '../data/caseStudies'
import CaseBlocks from '../components/CaseBlocks'

function CaseStudy() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const study = caseStudies[id]

  if (!project || !study) {
    return <Navigate to="/work" replace />
  }

  const { hero } = study

  return (
    <article className="section case">
      <Link className="back-link" to="/work">
        ← Back to work
      </Link>

      <h1 className="case__title">{project.name}</h1>

      <img
        className="case__hero"
        src={`${import.meta.env.BASE_URL}${project.image}`}
        alt=""
      />

      {hero && (
        <div className="case__block case__intro">
          {hero.meta && <p className="case__meta-line">{hero.meta}</p>}
          {hero.summary && <CaseBlocks blocks={hero.summary} />}
          {hero.tagline && <p className="case__tagline">{hero.tagline}</p>}
        </div>
      )}

      {study.sections.map((section) => (
        <div className="case__block" key={section.heading}>
          <h2 className="section__title case__heading">{section.heading}</h2>

          {section.blocks && <CaseBlocks blocks={section.blocks} />}

          {section.meta && (
            <dl className="case-meta">
              {section.meta.map((row) => (
                <div className="case-meta__row" key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {section.subsections?.map((sub) => (
            <div className="case-step" key={sub.heading}>
              <h3>{sub.heading}</h3>
              <CaseBlocks blocks={sub.blocks} />
            </div>
          ))}
        </div>
      ))}

      {study.closingImage && (
        <img
          className="case__closing"
          src={`${import.meta.env.BASE_URL}${study.closingImage}`}
          alt=""
        />
      )}
    </article>
  )
}

export default CaseStudy
