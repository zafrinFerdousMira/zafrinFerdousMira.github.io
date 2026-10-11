# Zafrin Ferdous Mira research website

A responsive academic portfolio for a Materials Science and Engineering PhD candidate at Clemson University. The research, education, publication, teaching, and award content is based on the supplied academic CV. It includes a public-facing statement of interest in research scientist and postdoctoral positions.

## Preview locally

Serve this directory with any static web server, for example `python3 -m http.server 8000`, then open `http://localhost:8000`. No build step, package installation, or API keys are required.

## Edit content

- `index.html`: About, research, publications, education, presentations, awards, and contact details.
- `css/researcher.css`: Responsive layout, colors, and typography.
- `js/researcher.js`: Mobile navigation, publication filters, citation copying, and section navigation.
- `img/mira.png`: Existing profile photo retained from this repository.

The draft avoids prominent GitHub links and decorative heading punctuation. CV and resume PDFs are not committed. The private preview includes the supplied CV as an embedded download; the repository version uses a publications link instead. The page uses local assets and system fonts. Its content and links work without JavaScript; JavaScript adds navigation and publication interactions. Citation copying has a visible manual-copy fallback.

## GitHub Pages

The website is compatible with GitHub Pages serving from the repository root. Merging the redesign into the branch already used for Pages updates the site. Confirm the repository's Pages publishing branch in GitHub Settings before changing deployment settings.

Legacy page addresses redirect to relevant sections of the updated website. Older research assets remain in the repository.
