# Local VR Estate Viewings Clone (desktop UI + local ksplat)

This is a local desktop-style clone of the viewer shell used by `vrestateviewings.com` (logo bar + address bar + toggle/fullscreen controls + scene loading).

## Files

- `index.html`: local viewer page.
- `scripts/fetch-ksplat.ps1`: helper script to download a `.ksplat` from any listing page into `./assets/scene.ksplat`.
- `Assets/`: local viewer icons copied from the embedded app UI (`logo.png`, `address-icon.png`, `freewalk-icon.png`, `exterior-icon.png`, `fullscreen-icon.png`).

## Run locally

1. Put your `.ksplat` at `assets/scene.ksplat`.
2. Start a local server from the repo root:
   - `python -m http.server 8000`
3. Open `http://localhost:8000`.

You can also:

- Load a different `.ksplat`/`.splat`/`.ply` via the `Local file` picker.
- Paste a remote URL and click **Load URL**.
- Pass `?asset=https://.../your-scene.ksplat` in the URL.

## What it uses

- Viewer library: `@mkkellogg/gaussian-splats-3d` via jsDelivr module CDN.
- UI styling and control pattern modeled on `https://calm-alpaca-1f7a0c.netlify.app/index_desktop.html`.
