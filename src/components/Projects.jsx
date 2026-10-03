import { projects } from '../data/content'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__heading">Selected work</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
