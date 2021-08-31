gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ defaults : { duration : 2, ease : 'power4.easeOut'}})
    tl
        .from('.kontainer-navigasi', {y: '-30%', opacity: 0,})
        .from('.createH', { opacity : 0, y : '-100%' },'<1')
        .from('.anim1', { opacity : 0}, "-=1.5")
        .from('.anim1Btn', { opacity : 0}, "-=1.5")

gsap.from(".anim2", {
    scrollTrigger: {
        trigger: ".anim2",
        start : "top center"
    },
    opacity: 0,
    duration: 1.2

});

gsap.from(".anim2Kiri", {
    scrollTrigger: {
        trigger: ".anim2Kiri",
        start : "top center"
    },
    x: -50,
    opacity: 0,
    duration: 1.2

});

gsap.from(".anim2Kanan", {
    scrollTrigger: {
        trigger: ".anim2Kanan",
        start : "top bottom"
    },
    x: 50,
    opacity: 0,
    duration: 1.2

});


gsap.from(".anim3", {
    scrollTrigger: {
        trigger: ".anim3",
        start : "top center"
    },
    x : -50,
    opacity: 0,
    duration: 2

});

gsap.from(".anim3Up", {
    scrollTrigger: {
        trigger: ".anim3Up",
        start : "top center"
    },
    y : -50,
    opacity: 0,
    duration: 2

});

gsap.from(".anim3Appear", {
    scrollTrigger: {
        trigger: ".anim3Up",
        start : "top center"
    },
    ease: 'power4.easeOut',
    opacity: 0,
    duration: 2,
    delay: 1

});

gsap.from(".anim4", {
    scrollTrigger: {
        trigger: ".anim4",
        start : "top center"
    },
    ease: 'power4.easeOut',
    opacity: 0,
    duration: 2,
    stagger: 1

});

gsap.from(".mail", {
    scrollTrigger: {
        trigger: ".mail",
        start : "bottom bottom"
    },
    ease: 'power4.easeOut',
    opacity: 0,
    duration: 2,
    delay: 3

});
