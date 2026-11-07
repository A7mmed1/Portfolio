# Personal Portfolio

Personal portfolio website built with PHP, HTML, SCSS, JavaScript, and Gulp.

## Repository layout

- `index.php` — main page
- `contact.php` — contact endpoint
- `scss/`, `css/`, `js/` — front-end source and assets
- `images/`, `video/` — media assets
- `Gulpfile.js` — asset build tasks

## Local development

This is an older project. Review the PHP and Node.js compatibility requirements before running it. The repository contains a `package.json` with Gulp development dependencies; `npm install` may require a compatible legacy environment. Use a local PHP development server only after reviewing the code and configuration.

## Maintenance notes

- `node_modules/` is committed in the existing history; a separate cleanup PR should remove generated dependencies from tracking after confirming the build.
- Review `contact.php` and any configuration for safe handling of secrets and user input before deploying.
- Historical website: https://www.ahmmed-mohammed.info (availability not verified).

## Status

Historical personal project, retained as a portfolio example. Deployment and current compatibility have not been verified.
