gsap.registerPlugin(ScrollTrigger);

gsap.to(".fourth-scroll", {
	rotation: 360,
	duration: 1,
	ease: "power1.out",
	scrollTrigger: {
		trigger: ".fourth-scroll",
		toggleActions: "restart",

	},
	start: 3000,


})


