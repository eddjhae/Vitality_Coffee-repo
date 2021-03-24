window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.anim2',
        start: "center bottom 100",
    }
});

gsap.from('.anim1',{
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        y: -50,
});

tl.from('.anim2', {
    y: 200,
    opacity: 0,
    duration: 0.7,
});

tl.from('.title', {
    opacity: 0,
    duration: 0.3,
});
