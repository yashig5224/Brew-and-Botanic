// Scroll animation (trigger elements to animate on scroll)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));
function showBrew() {
  const base = document.getElementById('base').value;
  const floral = document.getElementById('floral').value;
  const milk = document.getElementById('milk').value;
  const sweetener = document.getElementById('sweetener').value;
  document.getElementById('brew-result').innerText =
    `You brewed a ${base} tea with ${floral}, ${milk !== 'None' ? milk + ' milk' : 'no milk'}, and ${sweetener}. 🌸`;
}
