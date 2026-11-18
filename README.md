# 🍗 Chicken Tender Date

A small, playful webpage that invites my brother to go out for chicken tenders with me and our sister. Say "Yes" and a dancing GIF celebrates. Try to say "No" and the button runs away.

**Live demo:**[ chicken-date-wine.vercel.app](https://chicken-date-wine.vercel.app/)

## Why I built this

This is my first project built from scratch. I wanted to learn the full loop of software development: **build, test, and deploy**.

## How it works

1. A splash screen appears for a few seconds.
2. The question screen asks: "Hello Hamza! Do you want to go eat chicken tenders with me and our sister?"
3. **Yes** leads to a success screen with a happy dancing GIF.
4. **No** dodges the cursor (desktop) or the finger (mobile), so it can never be clicked.

## Built with

- HTML for structure
- CSS for the theme
- JavaScript for screen switching and the dodging button
- Git and GitHub for version control
- Vercel for deployment

## Project structure

```
chicken-date/
├── index.html    # the three screens
├── style.css     # theme and screen visibility
├── script.js     # screen switching and the dodging No button
├── dance.gif     # the celebration GIF
└── README.md     # this file
```

## Run it locally

1. Clone the repo:
   ```
   git clone (https://github.com/AyeshaChouhadry/Chicken-Date/)
   ```
2. Open the folder and double-click `index.html`.

No installation or build step is needed.

## Deployment

The site is deployed on Vercel and connected to this GitHub repo. Every `git push` to the main branch redeploys the site automatically.

## Roadmap

- [x] Three-screen flow (splash, question, success)
- [x] Dodging No button with mouse and touch support
- [x] Deploy to Vercel
- [ ] Automated tests for the dodge logic
- [ ] Send a confirmation email with the date, time, and venue when he says Yes
- [ ] Calendar invite (.ics) attachment for automatic reminders
- [ ] Rebuild in React as a practice project

## What I learned

- Splitting a project into HTML, CSS, and JS files
- Handling mouse and touch events differently
- Using Git and GitHub daily
- Deploying a real site with a public link

## Author

Made with love by Ayesha Chouhadry 🍗
