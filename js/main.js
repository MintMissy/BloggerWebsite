gsap.registerPlugin(ScrollTrigger);

function moveUpAnimation(selector, delay) {
	gsap.fromTo(
		selector,
		{
			opacity: 0,
			y: 50,
		},
		{
			delay: delay,
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: selector,
				start: "50% 80%",
				once: true,
			},
		}
	);
}
function moveLeftAnimation(selector, delay) {
	gsap.fromTo(
		selector,
		{
			opacity: 0,
			x: 50,
		},
		{
			delay: delay,
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: selector,
				start: "20px 80%",
				once: true,
			},
		}
	);
}

function timeLineMoveUpAnimation(selector, delay, stagger) {
	gsap.timeline().fromTo(
		selector,
		{
			opacity: 0,
			y: 50,
		},
		{
			stagger: stagger,
			delay: delay,
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: selector,
				start: "20px 80%",
				once: true,
			},
		}
	);
}

// Navbar animations
timeLineMoveUpAnimation(".navbar__links__link", 0, 0.02);

// Home hero animations
moveUpAnimation(".home-hero__content__sub-title", 0);
moveUpAnimation(".home-hero__content__title", 0.1);
moveUpAnimation(".home-hero__content__description", 0.15);
moveUpAnimation(".home-hero__content__action__contact", 0.3);
moveUpAnimation(".home-hero__content__action__channel", 0.4);
moveUpAnimation(".home-hero__content__action__channel", 0.4);
moveLeftAnimation(".home-hero__image", 0.2);

// About animations
moveUpAnimation(".about__content__subheader-1", 0);
moveUpAnimation(".about__content__header-1", 0.1);
moveUpAnimation(".about__content__description-1", 0.15);
moveUpAnimation(".about__content__subheader-2", 0);
moveUpAnimation(".about__content__header-2", 0.1);
moveUpAnimation(".about__content__description-2", 0.15);

// Timeline section
moveUpAnimation(".timeline-section__content__subheader", 0);
moveUpAnimation(".timeline-section__content__header", 0.1);
timeLineMoveUpAnimation(".timeline-section__timeline__item", 0.15, 0.05);

// Latest videos section
moveUpAnimation(".videos-container__content__subheader", 0);
moveUpAnimation(".videos-container__content__header", 0.1);
moveUpAnimation(".videos-container__content__description", 0.15);
timeLineMoveUpAnimation(".video-list > .video", 0.15, 0.05);

// Social media
moveUpAnimation(".media-container__subheader", 0);
moveUpAnimation(".media-container__title", 0.1);
moveUpAnimation(".media-container__description", 0.15);
timeLineMoveUpAnimation(".media-list__item", 0.15, 0.05);

// Contact Form
moveUpAnimation(".contact-form__content__subheader", 0);
moveUpAnimation(".contact-form__content__header", 0.1);
timeLineMoveUpAnimation(".input-container", 0.15, 0.02);
moveUpAnimation(".btn--submit", 0);

// moveUpAnimation('.home-hero__content__title', 1)
// moveUpAnimation('.home-hero__content__title', 1)
