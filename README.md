# crabsiege.kettlekite.com

Site for Crab Siege: Island Defense, a Kettlekite game. Served by GitHub Pages from `main` (domain in `CNAME`).

- `/` product page, `/support`, `/privacy`, `/terms` (the URLs App Store Connect uses).
- `assets/kk.css`, `game.css`, `game.js`, `kite.svg` and `assets/fonts/` are copied from `kettlekite-site` (`scripts/sync-shared.sh`); edit them there. `assets/theme.css` holds this game's colours.
- `assets/site.css` and `site.js` hold polish on top of the synced files (tap targets, press states, skip link, the hero film resting under reduced motion); they are the same on every game site and are not synced, so fold them into `kettlekite-site` when convenient.
- The pages, `theme.css`, `icon.png` and `media/` are the game repo's `web/` folder (`hero-outpost`); change them there and copy them over. `assets/icon.png` is the app icon (`unity/Assets/_Project/Art/Icon/AppIcon.png` at 512 px); `assets/media/` holds the page media: screens from the game's autoplay walk of stage 1 (660 px wide), the model renders as square tiles, the OG card (a 1200x630 capture of the hero) and the sister games' icons.
- Keep `privacy.html` in step with the App Store privacy details (Data Not Collected): update it before a version that changes what the game handles ships.
