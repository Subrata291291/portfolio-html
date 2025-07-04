// Animate the progress bars on load
window.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });
});