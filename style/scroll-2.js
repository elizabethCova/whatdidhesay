gsap.registerPlugin(ScrollTrigger);

gsap.to(".second-scroll", {
	scale: 5,
	duration: 2,
	scrollTrigger: {
		trigger: ".second-scroll",
		toggleActions: "restart",
	},
	start: 1200,
	marginLeft: 60,
})



