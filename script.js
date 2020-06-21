gsap.set("body > *", {autoAlpha: 1});

const tl = gsap.timeline({delay: 0.5});

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#trageto", {
  duration: 8, 
  repeat: -1,
  repeatDelay: 3,
  yoyo: true,
  ease: "ease-in",
  motionPath:{
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5]
  }
});