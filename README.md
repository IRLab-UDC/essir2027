# ESSIR 2027

Website of the 18th European Summer School on Information Retrieval, 12 to 16 July 2027, Faculty of Computer Science, Universidade da Coruña. Organised by the Information Retrieval Lab (IRLab).

Live at https://essir2027.irlab.org. Built with [Astro](https://astro.build) as a static site and hosted on GitHub Pages.

## Workflow

1. Run the site locally and edit (see below). The page reloads on every save.
2. Commit and push to `main`.
3. GitHub Actions builds and publishes the site in one or two minutes. Progress is in the **Actions** tab. If a build fails, the live site keeps the previous version.

Only `main` is deployed. Work on another branch to try things without publishing them.

## Run locally

With Docker:

```sh
docker compose up        # http://localhost:4321
```

Or with Node 22.12 or later:

```sh
npm install
npm run dev              # http://localhost:4321
npm run build            # static site in dist/
npm run preview          # serve dist/ locally
```

Run `npm run build` before pushing larger changes. It is the same build the deploy runs.

## Where things are

| Path | Content |
|---|---|
| `src/pages/` | One file per page: home, programme, speakers, attending, FDIA, organisation |
| `src/data/` | Content shown on the pages (see below) |
| `src/layouts/Layout.astro` | Header, navigation and footer shared by all pages |
| `src/components/` | Logo, page header, partner logo and travel card components |
| `src/styles/global.css` | Colours (light and dark), fonts and shared styles |
| `public/brand/` | ESSIR 2027 logo: primary, horizontal and symbol, each in light and dark |
| `public/logos/` | Partner logos |
| `public/essir2027.ics` | Calendar file behind "Add to calendar" |
| `.github/workflows/deploy.yml` | Build and deploy to GitHub Pages |

## Updating content

Most changes only touch `src/data/`. A page with an empty list shows "To be announced".

| File | Page |
|---|---|
| `speakers.ts` | Speakers |
| `programme.ts` | Programme, one entry per day |
| `committee.ts` | Organisation |
| `travel.ts` | Travel cards on Attending |
| `partners.ts` | Organiser and supporter logos on the home page |

Examples:

```ts
// src/data/speakers.ts
export const speakers: Speaker[] = [
  {
    id: 'jane-doe',
    name: 'Jane Doe',
    affiliation: 'University of Somewhere',
    country: 'Spain',
    bio: 'Short biography.',
    talkTitle: 'Title of the lecture',
    photo: '/speakers/jane-doe.jpg',
  },
];
```

```ts
// src/data/programme.ts
export const programme: Day[] = [
  {
    label: 'Monday',
    date: '12 July',
    slots: [
      { time: '09:00', title: 'Opening', type: 'keynote' },
      { time: '09:30', title: 'Title of the lecture', speaker: 'Jane Doe', type: 'lecture' },
      { time: '11:00', title: 'Coffee break', type: 'break' },
    ],
  },
];
```

Slot types: `keynote`, `lecture`, `workshop`, `break`, `social`.

Images go in `public/` and are referenced from the site root, so `public/speakers/jane-doe.jpg` becomes `/speakers/jane-doe.jpg`.

Accommodation, Registration and Visa on the Attending page are placeholders in `src/pages/attending.astro`.

## Hosting

- GitHub Pages, source set to GitHub Actions (Settings, Pages), custom domain `essir2027.irlab.org`, HTTPS enforced.
- DNS for `irlab.org` is at GoDaddy: `CNAME essir2027 → irlab-udc.github.io`.
- The IRLab internal DNS answers for `irlab.org` itself, so inside the lab network the site returns a 503 until the same CNAME is added there.

## Moving to 2027.essir.eu

1. Change `site` in `astro.config.mjs`.
2. Change the custom domain in Settings, Pages.
3. Ask the `essir.eu` DNS managers for `CNAME 2027 → irlab-udc.github.io`.
4. Once GitHub has issued the certificate, tick Enforce HTTPS again.
