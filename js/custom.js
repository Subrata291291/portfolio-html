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

function playAudio() {
    const audio = document.getElementById("myAudio");
    const icon = document.getElementById("audio-icon");

    if (audio.paused || audio.ended) {
      audio.play();
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      audio.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  }


  // Portfolio  area

$(document).ready(function () {
  $('.portfolio-tab ul li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.portfolio-tab ul li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });
});


// Navbar Active class
  document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("div[id]"); 
  const navLinks = document.querySelectorAll(".nav-area ul li a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.3, // show active if 30% visible (more flexible than 0.5)
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Review slider js
$(".review-slider").slick({
  dots: true,
  infinite: true,
  centerMode: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1199,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
        centerPadding: '30px',
      }
    }
  ]
})
