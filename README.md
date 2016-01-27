# Yep
An awesome Jeopardy game for the web. Built using React JS, Redux, CSS modules
and postcss. All bundled with Webpack, which also gives us hot reloading!

## Installation
Make sure node is installed, then:
1. Run: `npm install`
2. Run: `npm start`

### Build
Just run `npm run build` and webpack will bundle everything together into
bundle.js and style.css and place them in the dist folder. We'll have to update
the webpack build config to fix paths for index.html when going to production
(or just do it manually).

