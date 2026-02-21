# Variable Components

A minimal Next.js example demonstrating GT's variable components: `<Var>`, `<Num>`, `<Currency>`, and `<DateTime>` inside `<T>`.

**[Live Demo](https://variable-components.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This app shows a user profile card with locale-aware formatting for names, numbers, currencies, and dates. Switch locales to see how each variable component adapts its output to match the selected language and region.

## GT Features Used

- `<T>` — JSX translation
- `<Var>` — Wraps dynamic content (user name) that should not be translated
- `<Num>` — Locale-aware number formatting (follower counts, post counts)
- `<Currency>` — Locale-aware currency display (account balance)
- `<DateTime>` — Locale-aware date formatting (member since date)
- `<LocaleSelector>` — Language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/variable-components.git
cd variable-components
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
