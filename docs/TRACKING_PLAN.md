# Tracking Plan

## Google Analytics

- **Status:** Placeholder — not yet configured
- **Implementation:** Add GA4 measurement ID via `next/script` or `@next/third-parties`
- **Environment variable:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Event Tracking

Events to track once analytics is configured:

| Event Name            | Trigger                          | Parameters         |
|-----------------------|----------------------------------|--------------------|
| `page_view`           | Page load (automatic with GA4)   | `page_path`        |
| `section_view`        | Section scrolled into viewport   | `section_name`     |
| `cta_click`           | CTA button clicked               | `cta_label`, `cta_location` |
| `contact_form_submit` | Contact form submitted           | `form_name`        |
| `document_download`   | PDF or document downloaded       | `document_name`    |

## Form Submission Tracking

- Contact form submissions should fire a custom event
- Integration target TBD (email service, webhook, or external form handler)
- No server-side form handling at launch

## Vercel Analytics

- **Option:** Enable Vercel Web Analytics for core web vitals and page views
- **Package:** `@vercel/analytics`
- **Status:** Not yet installed — add when ready for production monitoring

## Conversion Goals

Goals to define once tracking is active:

1. **Primary:** Contact form submission or CTA engagement
2. **Secondary:** Time on site > 2 minutes
3. **Tertiary:** Multi-section scroll depth (> 75% page viewed)
