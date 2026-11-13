// Details on top of the shared game.js (synced from kettlekite-site; see site.css): the hero film rests on its
// poster, with controls, when motion is reduced, and pauses while it is off screen. A button beside the phone
// pauses it for good (WCAG 2.2.2); it also offers Play when the phone refuses to autoplay (iOS Low Power Mode).
(() => {
  const film = document.querySelector(".g-device video");
  if (!film) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    film.autoplay = false;
    film.controls = true;
    film.load();
    return;
  }
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "film-toggle";
  let held = false; // paused by hand: scrolling back into view does not restart it
  const show = () => {
    toggle.dataset.state = film.paused ? "paused" : "playing";
    toggle.setAttribute("aria-label", film.paused ? "Play the film" : "Pause the film");
  };
  toggle.addEventListener("click", () => {
    held = !film.paused;
    if (held) film.pause();
    else film.play().catch(show);
  });
  film.addEventListener("play", show);
  film.addEventListener("pause", show);
  film.closest(".g-device").append(toggle);
  show();
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { if (!held) film.play().catch(show); }
    else film.pause();
  }).observe(film);
})();
