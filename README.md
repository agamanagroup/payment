# Agamana Developers — Payment Information

A premium, responsive single-page payment information site built with **Next.js 15**, **Tailwind CSS**, **Lucide React**, and **Framer Motion**. Displays bank details and a UPI QR code with copy, WhatsApp share, and QR share.

## What to edit before going live

1. **`app/payment-config.js`** — the single source of truth.
   - `PAYMENT.upiId` → the UPI ID is **not shown** on the page (QR only), but it is still embedded in the copy/share text. Replace `agamana@hdfcbank` with the real value when ready.
   - `CONTACT` → phone, WhatsApp, email (already filled in).
2. **`public/logo.png`** — the real Agamana logo (already in place).
3. **`public/upi-qr.jpeg`** — the real UPI QR image (already in place).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy on Vercel via GitHub

1. Push this folder to a new GitHub repository.
2. In Vercel, **New Project → Import** the repo.
3. Framework auto-detects as **Next.js** — no settings to change. Click **Deploy**.

Google Fonts (Poppins + Inter) are loaded through `next/font`, so they self-host at build time on Vercel — no extra config needed.

## Project structure

```
app/
  layout.js          fonts + SEO metadata
  page.js            the page
  globals.css        Tailwind + base styles
  payment-config.js  EDIT YOUR DETAILS HERE
components/
  Card.js            card wrapper with hover lift
  InfoRow.js         label + value + copy button
  CopyButton.js      per-field copy w/ "Copied" state
  Toast.js           success toast
  FloatingWhatsApp.js  floating help button
public/
  logo.png           replace with real logo
  upi-qr.png         replace with real QR
```

## Notes

- **Copy** uses the Clipboard API with a legacy fallback (works inside the WhatsApp in-app browser).
- **Share QR** uses the Web Share API with file sharing; if unsupported it downloads the QR image.
- Accessible: 44px touch targets, visible focus rings, ARIA labels, reduced-motion respected.
