# ESSIR 2027

Website of the 18th European Summer School on Information Retrieval, 12 to 16 July 2027, Faculty of Computer Science, Universidade da Coruña. Organised by the Information Retrieval Lab (IRLab).

Built with [Astro](https://astro.build) as a static site.

## Run locally

Requires Node 22.12 or later.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/ locally
```

With Docker: `docker compose up`.

## Where things are

| Path | Content |
|---|---|
| `src/pages/` | One file per page (home, programme, speakers, attending, FDIA, organisation) |
| `src/data/programme.ts` | Programme by day. Empty list shows "To be announced" |
| `src/data/speakers.ts` | Invited speakers |
| `src/data/committee.ts` | Organising committee |
| `src/data/travel.ts` | Travel options on the Attending page |
| `src/data/partners.ts` | Organiser and supporter logos on the home page |
| `src/styles/global.css` | Colours (light and dark), fonts and shared styles |
| `public/brand/` | ESSIR 2027 logo (primary, horizontal, symbol; light and dark) |
| `public/logos/` | Partner logos |
| `public/essir2027.ics` | Calendar file behind "Add to calendar" |

To add speakers, the programme or the committee, fill in the matching file in `src/data/`. The pages render the entries automatically.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`).

The site is served at `https://essir2027.irlab.org`. To move it to the official `https://2027.essir.eu`:

1. Change `site` in `astro.config.mjs`.
2. Change the custom domain in the repository settings (Settings, Pages).
3. Point a `CNAME` DNS record for the new domain to the GitHub Pages host.
