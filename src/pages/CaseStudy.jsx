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

      <div className="case__block">
        <h2 className="section__title case__heading">Role</h2>
        <CaseBlocks blocks={study.role.intro} />
        <dl className="case-meta">
          {study.role.meta.map((row) => (
            <div className="case-meta__row" key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="case__block">
        <h2 className="section__title case__heading">Problem</h2>
        <CaseBlocks blocks={study.problem} />
      </div>

      <div className="case__block">
        <h2 className="section__title case__heading">Goals</h2>
        <CaseBlocks blocks={study.goals} />
      </div>

      <div className="case__block">
        <h2 className="section__title case__heading">Process</h2>
        {study.process.map((step) => (
          <div className="case-step" key={step.heading}>
            <h3>{step.heading}</h3>
            <CaseBlocks blocks={step.blocks} />
          </div>
        ))}
      </div>

      <div className="case__block">
        <h2 className="section__title case__heading">Impact</h2>
        <CaseBlocks blocks={study.impact} />
      </div>

      <div className="case__block">
        <h2 className="section__title case__heading">Insights &amp; Learnings</h2>
        <CaseBlocks blocks={study.insights} />
      </div>
    </article>
  )
}

export default CaseStudy
