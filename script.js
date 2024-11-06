// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Create timeline for feature cards
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.features-section',
            start: 'top center+=100',
            end: 'center center',
            toggleActions: 'play none none reverse',
            markers: true, // For debugging
        }
    });

    // Animate section title first
    tl.from('.features-section .text-center', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    
    // Then animate cards with stagger
    .from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: {
            each: 0.2,
            ease: 'power3.out'
        },
        ease: 'power3.out'
    }, '-=0.4'); // Overlap with title animation

    // Add hover animations
    gsap.utils.toArray('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
    });
});