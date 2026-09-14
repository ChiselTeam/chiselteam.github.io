# ChiselTeam website

Static organization website and documentation for Chisel and CTM. The published files live in `dist/`; there is no package manager or build step.

## Preview locally

From the repository root:

```bash
python -m http.server 8080 --directory dist
```

Then open `http://localhost:8080`.

## Publish on GitHub Pages

1. Create or use the `ChiselTeam.github.io` repository.
2. Put these files on its `main` branch.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.
4. Push to `main`. The included workflow publishes `dist/`.

For a project repository instead of `ChiselTeam.github.io`, the relative links and assets will continue to work beneath the repository path.

## Content map

- `dist/index.html` — organization homepage
- `dist/projects/` — Chisel and CTM overview
- `dist/docs/players/` — installation and gameplay
- `dist/docs/modpacks/` — pack configuration and family tags
- `dist/docs/developers/` — Chisel API and contribution guidance
- `dist/docs/ctm/` — CTM models and datagen reference

## Updating versions

Version badges are intentionally plain HTML so updates are visible in review. Search for the old Chisel, CTM, Minecraft, and NeoForge versions across `dist/` when preparing a release.

## Assets

The pixel-art textures and item sprite under `dist/assets/img/` come from the ChiselTeam Chisel and CTM repositories and remain covered by those projects' GPL-3.0 licenses.
