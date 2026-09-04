const navLinks = document.querySelectorAll('.nav a');
const sections = [...document.querySelectorAll('main section, footer')];

const updateActiveLink = () => {
  const current = sections.reduce((active, section) => {
    return window.scrollY + 140 >= section.offsetTop ? section.id : active;
  }, 'about');
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

const resumeMessage = document.querySelector('.resume-teaser');
if (resumeMessage) {
  const blinkResumeMessage = () => {
    resumeMessage.classList.remove('is-highlighted');
    void resumeMessage.offsetWidth;
    resumeMessage.classList.add('is-highlighted');
  };

  const resumeObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) blinkResumeMessage();
  }, { threshold: 0.35 });

  resumeObserver.observe(resumeMessage);
}
