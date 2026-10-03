function ProjectCard({ project }) {
  const { name, description, tags, link } = project

  const content = (
    <>
      <div className="project-card__thumb" aria-hidden="true" />
      <h3 className="project-card__name">{name}</h3>
      <p className="project-card__description">{description}</p>
      <ul className="project-card__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  )

  if (link) {
    return (
      <a className="project-card" href={link} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return <div className="project-card">{content}</div>
}

export default ProjectCard
