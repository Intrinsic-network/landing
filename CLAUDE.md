# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Intrinsic Finance landing page — a single-page React app (Create React App) that links out to the main DeFi application at `app.intrinsic.finance`.

## Commands

- `npm start` — dev server on localhost:3000
- `npm run build` — production build to `build/`
- `npm test` — run tests (Jest, interactive watch mode)

## Architecture

This is a minimal single-component app. All UI lives in `src/App.js` with styles in `src/App.css`. Global styles and the background image are set in `public/index.html` via inline `<style>`.

**External dependencies loaded via CDN (not npm):**
- Bootstrap 5.3.3 — utility classes (`d-flex`, `flex-column`, etc.) used throughout
- Google Fonts (Poppins)

These are linked in `public/index.html`, not imported in JS. Keep this in mind when adding styles — Bootstrap utilities are available globally.

## Key URLs

The app links to these Intrinsic properties:
- App: `https://app.intrinsic.finance/#/swap`
- Docs: `https://docs.intrinsic.finance/`
- GitHub: `https://github.com/Intrinsic-network`
- Twitter/X: `https://x.com/Intrinsicfi`
