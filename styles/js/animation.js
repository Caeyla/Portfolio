
gsap.registerPlugin(ScrollTrigger);
const myName = new SplitType('#name');
const myJob = new SplitType('#job');
const myTimeLine = gsap.timeline({

});
myTimeLine.fromTo(".char", {
    y: -10,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.2,
        duration: .1,
    })
myTimeLine.fromTo("#contactbtn",
    {
        y: - 100,
        opacity: 0,
    },
    {
        opacity: 1,
        y: 0,

        ease: "bounce.out(1.7)",
    });
const scrollTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".showcase",
        start: "top center",
        end: "bottom center",
        toggleActions: "play complete complete complete",
        scrub: true,
        markers: true,
    }
});

scrollTl.fromTo(".showcase", {
    opacity: 0,
},
    {
        x: 0,
        opacity: 1,
        duration: 5,

    })
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log("Tay")
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)