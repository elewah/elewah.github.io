# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio website for Abdelrahman Elewah (AI & ML Researcher), hosted on GitHub Pages at elewah.github.io. Static site built on the [devportfolio-template](https://github.com/RyanFitzgerald/devportfolio-template).

## Build / Development

```bash
npm install          # install Gulp dev dependencies
npm run watch        # compile SCSS → css/styles.css and minify js/scripts.js → js/scripts.min.js
```

Individual tasks:
```bash
npx gulp styles      # compile SCSS only
npx gulp scripts     # minify JS only
```

The page loads `css/styles.css` and `js/scripts.min.js` — always run the build after editing source files.

## Architecture

- **`index.html`** — all content lives here; edit directly for copy/structure changes
- **`scss/styles.scss`** → compiles to `css/styles.css` — all custom styles; color scheme controlled by variables at the top (`$base-color`, `$background`, etc.)
- **`js/scripts.js`** → minifies to `js/scripts.min.js` — handles mobile menu, experience timeline (vertical timeline built dynamically from `#experience-timeline` divs), smooth scroll, and the optional "Show More Projects" toggle
- **`libs/font-awesome/`** — vendored Font Awesome (not from CDN)
- **`main.tex`** — LaTeX source for the CV/resume (separate from the web resume link)

## Key HTML patterns

**Experience timeline** — add `<div data-date="...">` blocks inside `#experience-timeline`; JS builds the timeline automatically.

**Projects** — `.project` divs inside `#projects .row`; use class `no-image` to skip the image column; use `#more-projects` + `#view-more-projects` anchor for a collapsible "Show More" section.

**Skills** — plain `<ul><li>` inside `#skills`; renders as a tag cloud.

**Contact form** — uses Formspree (`action="https://formspree.io/..."`) since the site is static.

**Sticky header** — add class `sticky` to `<header>` to make it fixed.

**External nav links** — add class `no-scroll` to `<a>` tags in the header nav to prevent smooth-scroll behavior.

## Resume link

The resume button links to a PDF hosted in a separate GitHub repo (`elewah/Elewah-Resume`), not a local file.
