import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

// Navbar Timeline
gsap
  .timeline({
    scrollTrigger: { trigger: ".navbar", start: "20px 80%", once: true },
  })
  .add("start")
  .from(".navbar__links__link", { y: 50, opacity: 0, stagger: 0.05 });

// Home hero animations
gsap
  .timeline({
    scrollTrigger: { trigger: ".home-hero", start: "20px 80%", once: true },
  })
  .add("start")
  .from(".home-hero__content__sub-title", { y: 50, opacity: 0 }, "start")
  .from(
    ".home-hero__content__title",
    { delay: 0.05, y: 50, opacity: 0 },
    "start"
  )
  .from(
    ".home-hero__content__description",
    { delay: 0.1, y: 50, opacity: 0 },
    "start"
  )
  .from(
    ".home-hero__content__action__contact",
    { delay: 0.2, y: 50, opacity: 0 },
    "start"
  )
  .from(
    ".home-hero__content__action__channel",
    { delay: 0.25, y: 50, opacity: 0 },
    "start"
  )
  .from(".home-hero__image", { delay: 0.3, x: 50, opacity: 0 }, "start");

// About animations
gsap
  .timeline({
    scrollTrigger: { trigger: ".about__col-1", start: "20px 80%", once: true },
  })
  .add("start")
  .from(".about__content__subheader-1", { y: 50, opacity: 0 }, "start")
  .from(
    ".about__content__header-1",
    { y: 50, opacity: 0, delay: 0.05 },
    "start"
  )
  .from(
    ".about__content__description-1",
    { y: 50, opacity: 0, delay: 0.1 },
    "start"
  );

gsap
  .timeline({
    scrollTrigger: { trigger: ".about__col-2", start: "20px 80%", once: true },
  })
  .add("start")
  .from(".about__image", { xPercent: -50, opacity: 0 }, "start")
  .from(".about__content__subheader-2", { y: 50, opacity: 0 }, "start")
  .from(
    ".about__content__header-2",
    { y: 50, opacity: 0, delay: 0.05 },
    "start"
  )
  .from(
    ".about__content__description-2",
    { y: 50, opacity: 0, delay: 0.1 },
    "start"
  );

// Stats animations
function initializeCounter() {
  document
    .querySelectorAll(".statistics__list__stat > p")
    .forEach((element) => element.classList.add("initialized"));
}
gsap
  .timeline({
    scrollTrigger: { trigger: ".statistics", start: "20px 80%", once: true },
  })
  .add("start")
  .from(".statistics", { x: 50, opacity: 0, delay: 0.1, stagger: 0.1 }, "start")
  .from(".statistics__title", { x: 25, opacity: 0, delay: 0.1 }, "start")
  .from(
    ".statistics__list__stat",
    {
      x: 25,
      opacity: 0,
      delay: 0.1,
      stagger: 0.1,
      onComplete: initializeCounter,
    },
    "start"
  );

// Timeline animations
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".timeline-section",
      start: "20px 60%",
      once: true,
    },
  })
  .add("start")
  .from(".timeline-section__image", { xPercent: -50, opacity: 0 }, "start")
  .from(".timeline-section__content__subheader", { y: 50, opacity: 0 }, "start")
  .from(
    ".timeline-section__content__header",
    { y: 50, opacity: 0, delay: 0.05 },
    "start"
  )
  .from(
    ".timeline-section__timeline__item",
    { y: 50, opacity: 0, delay: 0.05, stagger: 0.1 },
    "start"
  );

// Latest Videos animations
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".videos-container",
      start: "15% center",
      once: true,
    },
  })
  .add("start")
  .from(".videos-container__content__subheader", { y: 50, opacity: 0 }, "start")
  .from(
    ".videos-container__content__header",
    { y: 50, opacity: 0.0, delay: 0.05 },
    "start"
  )
  .from(
    ".videos-container__content__description",
    { y: 50, opacity: 0, delay: 0.1 },
    "start"
  )
  .from(".video", { y: 50, opacity: 0, delay: 0.15, stagger: 0.1 }, "start");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".media-container",
      start: "15% center",
      once: true,
    },
  })
  .add("start")
  .from(".media-container__subheader", { y: 50, opacity: 0 }, "start")
  .from(
    ".media-container__title",
    { y: 50, opacity: 0.0, delay: 0.05 },
    "start"
  )
  .from(
    ".media-container__description",
    { y: 50, opacity: 0, delay: 0.1 },
    "start"
  )
  .from(
    ".media-list__item",
    { y: 25, opacity: 0, delay: 0.15, stagger: 0.1 },
    "start"
  );

// Contact form animations
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".contact-form-wrapper",
      start: "15% center",
      once: true,
    },
  })
  .add("start")
  .from(".contact-form__content__subheader", { y: 50, opacity: 0 }, "start")
  .from(
    ".contact-form__content__header",
    { y: 50, opacity: 0.0, delay: 0.05 },
    "start"
  )
  .from(
    ".input-group",
    { y: 50, opacity: 0, delay: 0.1, stagger: 0.2 },
    "start"
  )
  .from(".btn--submit", { y: 50, opacity: 0, delay: 0.65 }, "start");
