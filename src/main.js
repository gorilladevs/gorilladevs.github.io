import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav')
  if (window.scrollY > 50) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
})

// Initial Hero Animations
const tl = gsap.timeline()

tl.fromTo('.kicker',
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
)
.fromTo('.glitch', 
  { y: 30, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
  "-=0.5"
)
.fromTo('.hero-desc',
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
  "-=0.5"
)
.fromTo('.hero-ctas',
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
  "-=0.5"
)
.fromTo('.glass-terminal',
  { x: 50, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power3.out' },
  "-=0.5"
)

// Flywheel Animations
gsap.fromTo('.fw-node',
  { scale: 0.5, opacity: 0 },
  {
    scale: 1, opacity: 1, duration: 0.8, stagger: 0.3, ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: '#flywheel',
      start: 'top 70%',
    }
  }
)

// Connectors grow after nodes appear
gsap.utils.toArray('.fw-connector').forEach((conn) => {
  gsap.to(conn.querySelector('.fw-line'), {
    width: '100%',
    duration: 1,
    scrollTrigger: {
      trigger: '#flywheel',
      start: 'top 50%',
    }
  });
});

// AI Labs Bento Box & Micro-interactions
gsap.fromTo('.bento-card',
  { y: 50, opacity: 0 },
  {
    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
    scrollTrigger: {
      trigger: '#labs',
      start: 'top 75%',
      onEnter: () => {
        // Animate pipeline test bar
        gsap.to('#anim-pipe-fill', { width: '100%', duration: 2, ease: 'power1.inOut', delay: 1 });
        // Animate agent nodes
        gsap.to('.agent-node', { y: -5, duration: 1, yoyo: true, repeat: -1, stagger: 0.2, ease: 'sine.inOut' });
      }
    }
  }
)

// Gaming Split Screen
gsap.fromTo('.split-text',
  { x: -50, opacity: 0 },
  {
    x: 0, opacity: 1, duration: 1, ease: 'power3.out',
    scrollTrigger: {
      trigger: '#gaming',
      start: 'top 70%',
    }
  }
)

gsap.fromTo('.split-visual',
  { x: 50, opacity: 0, scale: 0.9 },
  {
    x: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
    scrollTrigger: {
      trigger: '#gaming',
      start: 'top 70%',
    }
  }
)

// Tech Stack Matrix
gsap.fromTo('.tech-block',
  { y: 30, opacity: 0 },
  {
    y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power2.out',
    scrollTrigger: {
      trigger: '#tech',
      start: 'top 80%',
    }
  }
)
