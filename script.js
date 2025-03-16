new Typed("#typed", {
    strings: ["a Web Developer", "a Creative Coder", "an AI Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });

  const cursorTrail = document.getElementById("cursor-trail");
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursorTrail, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power1.out",
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#home h1", {
    x: -500,
    opacity: 0,
    duration: 1.5,         
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    }
  });

  gsap.to("#home p", {
    x: 500,
    opacity: 0,            
    duration: 1.5,
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    }
  });

  gsap.to("#home a", {
    y: 200,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    }
  });

  gsap.utils.toArray(".skill-tag").forEach((skill, index) => {
    gsap.from(skill, {
      x: index % 2 === 0 ? -200 : 200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: skill,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      scale: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play restart reverse pause",
      },
    });
  });


  function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.classList.remove('hidden');
  }

  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden')
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  let isMenuOpen = false;


  mobileMenuButton.addEventListener('click', () => {
  if (!isMenuOpen) {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('mobile-menu-open');
    mobileMenuButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
  } else {
    mobileMenu.classList.add('mobile-menu-close');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('mobile-menu-close');
    }, 280);
    mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
  }
  isMenuOpen = !isMenuOpen;
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu-close');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('mobile-menu-close');
    }, 280);
    mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
    isMenuOpen = false;
  });
});

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && isMenuOpen) {
        mobileMenu.classList.add('mobile-menu-close');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('mobile-menu-close');
        }, 280);
        mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        isMenuOpen = false;
      }
      lastScroll = currentScroll;
    });
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyPSmGpZENko12My3z_s4kmmXw0CQ5H4yMt02PEDpHtVyYSfBMp0bcV3PBIeAdPCNXI/exec'
    const form = document.forms['contact-form']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })

    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();

      const feedbackMessage = document.getElementById("feedback-message");
      feedbackMessage.classList.remove("hidden");

      setTimeout(() => {
        feedbackMessage.classList.add("hidden");
      }, 3000);

      this.reset();
    });

    document.addEventListener("DOMContentLoaded", function () {
      let tl = gsap.timeline();

      tl.from("#splash-animation", { opacity: 0, scale: 0.5, duration: 1.2, ease: "elastic.out(1, 0.5)" })
        .from("#splash-title", { opacity: 0, y: -20, duration: 1, ease: "power2.out" }, "-=0.8")
        .from("#splash-subtitle", { opacity: 0, y: 20, duration: 1, ease: "power2.out" }, "-=0.6")
        .to("#splash-screen", { opacity: 0, filter: "blur(10px)", duration: 1, ease: "power2.out", delay: 1.5 })
        .set("#splash-screen", { display: "none" });
    });