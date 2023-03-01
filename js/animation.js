const animInit = () => {
    const tl = gsap.timeline();
    tl.from('.loader_el', {
        duration: .6,
        scale: 10,
        ease: 'easeIn',
    })
        .to('.loader', {
            delay: 0.6,
            duration: .6,
            y: '-100%',
        })
        .from('.navbar', {
            duration: 1.5,
            y: -50,
            opacity: 0,
            skewX: 10,
            ease: 'easeIn',
        });
};

animInit();


const tl = gsap.timeline({ repeat: -1, yoyo: true });

// Add an animation to the timeline
tl.to(".contact", { duration: 1, x: 30, ease: 'easeInOut' });
tl.to(".social", { duration: 1, x: 30, ease: 'easeInOut' });
tl.to(".address", { duration: 1, x: 30, ease: 'easeInOut' });

// Play the timeline
tl.play();