//Skills data loading
  document.addEventListener('DOMContentLoaded', () => {
    const skillSection = document.querySelector('.skills-area');
    const skills = document.querySelectorAll('.skill-group');

    const animateSkills = () => {
      skills.forEach(skill => {
        const countSpan = skill.querySelector('.count');
        const progressBar = skill.querySelector('.progress-bar');
        const targetCount = parseInt(countSpan.getAttribute('data-count'), 10);
        const targetWidth = progressBar.getAttribute('data-width');

        // Animate number count
        let currentCount = 0;
        const increment = Math.ceil(targetCount / 50); // speed factor
        const counter = setInterval(() => {
          currentCount += increment;
          if (currentCount >= targetCount) {
            currentCount = targetCount;
            clearInterval(counter);
          }
          countSpan.textContent = `${currentCount}%`;
        }, 20);

        // Animate progress bar
        progressBar.style.width = targetWidth;
      });
    };

    // Use IntersectionObserver to trigger animation once
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(skillSection); // run only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillSection) {
      observer.observe(skillSection);
    }
  });
//Skills data loading