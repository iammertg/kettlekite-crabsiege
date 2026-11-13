# crabsiege.kettlekite.com

Site for Crab Siege: Island Defense, a Kettlekite game. Served by GitHub Pages from `main` (domain in `CNAME`).

- `/` product page, `/support`, `/privacy`, `/terms` (the URLs App Store Connect uses).
- `assets/kk.css`, `game.css`, `game.js`, `kite.svg` and `assets/fonts/` are copied from `kettlekite-site` (`scripts/sync-shared.sh`); edit them there. `assets/theme.css` holds this game's colours.
- `assets/site.css` and `site.js` hold polish on top of the synced files (tap targets, press states, skip link, the hero film resting under reduced motion); they are not synced, so fold them into `kettlekite-site` when convenient. Since 2026-11-13 this site's copies also add a pause button beside the hero film; Vanity Jam's site has the same film and not yet the button.
- The pages, `theme.css`, `icon.png` and `media/` started as the game repo's `web/` folder (`hero-outpost`, October); since 2026-11-13 they are edited here. `assets/icon.png` is the app icon (`unity/Assets/_Project/Art/Icon/AppIcon.png` at 512 px). `assets/media/`:
  - `demo.mp4` (496 px, 24.5 s, the hero film) and `demo-poster.jpg`: stage 10's boss wave on build 17, filmed on the simulator while the game's own bot plays.
  - `build.jpg`, `wild.jpg`, `hold.jpg`: stage 22 on the same build (simulator screenshots, 660 px).
  - `crabs/*.webp`: the game's own models rendered in Blender (transparent, 420 px); Runner and Bomber are drawn the way the game draws them. The crab cards' lines are the ones the game shows.
  - `watchtower.webp`, `cannon.webp`, `gate.webp`, `boilingpot.webp`: the defences, rendered the same way (560 px tall).
  - `og.jpg`: a 1200x630 share card (the title, the film's poster in the phone, five crabs) made from these files. `sundae-icon.png`, `vanity-icon.png`: the sister games' icons.
- Keep `privacy.html` in step with the App Store privacy details (Data Not Collected): update it before a version that changes what the game handles ships.
