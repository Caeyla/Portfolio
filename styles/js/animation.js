
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
// const scrollTl = gsap.timeline({});

myTimeLine.fromTo(".showcase", {
    opacity: 0,
},
    {
        x: 0,
        opacity: 1,
        duration: 2,

    })
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log("scroll")
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)