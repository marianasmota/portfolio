import { profile } from '../data/content'

function Contact() {
  const { email, linkedin, calendly, github } = profile.contact

  return (
    <section id="contact" className="section contact">
      <h2 className="section__heading">Let's talk</h2>
      <p className="contact__lede">
        Open to Senior Product Designer roles in AI products, data platforms,
        internal tools and B2B SaaS — remote or Europe-based.
      </p>
      <div className="contact__links">
        <a className="button button--primary" href={`mailto:${email}`}>
          Email me
        </a>
        <a className="button" href={calendly} target="_blank" rel="noreferrer">
          Book a call
        </a>
        <a className="button" href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="button" href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact
