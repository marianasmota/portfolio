import { profile } from '../data/content'

function Contact() {
  const { email, linkedin, calendly, github } = profile.contact

  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__links">
        <a href={`mailto:${email}`}>Email</a>
        <a href={calendly} target="_blank" rel="noreferrer">
          Book a call
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact
