Analytics setup

1) Set the environment variable `NEXT_PUBLIC_GA_ID` in your deployment/staging environment to your GA4 Measurement ID (e.g. `G-XXXXXXX`).
2) Verify `GoogleAnalytics` is active in `src/app/layout.tsx` only when `NEXT_PUBLIC_GA_ID` is present.
3) Instrument conversion events by calling `gtagEvent('event_name', { ... })` from `src/lib/analytics.ts`.
4) Recommended events: `contact_form_submission`, `lead_click`, `newsletter_signup`.
5) Verify in GA4 in Realtime and DebugView after deploying to staging.
