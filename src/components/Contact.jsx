import { profile } from '../data/content'

function Contact() {
  const { email, linkedin, bookCall, github } = profile.contact
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`

  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__links">
        <a href={gmailCompose} target="_blank" rel="noreferrer">
          Email
        </a>
        <a href={bookCall} target="_blank" rel="noreferrer">
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
