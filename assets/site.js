// Details on top of the shared game.js (synced from kettlekite-site; see site.css): the hero film rests on its
// poster, with controls, when motion is reduced, and pauses while it is off screen.
(() => {
  const film = document.querySelector(".g-device video");
  if (!film) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    film.autoplay = false;
    film.controls = true;
    film.load();
    return;
  }
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) film.play().catch(() => {});
    else film.pause();
  }).observe(film);
})();
