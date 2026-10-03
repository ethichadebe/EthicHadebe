// Smooth-scrolls to a section by id. Sections set scroll-margin-top (index.css),
// so they land just below the fixed navbar instead of under it.
export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// onClick for an <a href="#id">: scroll smoothly without adding #id to the URL.
export const sectionLink = (id, then) => (event) => {
  event.preventDefault()
  scrollToSection(id)
  then?.()
}
