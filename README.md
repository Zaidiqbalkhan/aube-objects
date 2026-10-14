# AUBE Objects — frontend retail concept

A custom, responsive **frontend-only storefront** for a fictional ceramics / home-objects brand. Created as a portfolio project: thoughtful editorial art direction, realistic sample merchandising, and interactive product-to-checkout flow.

> **This is NOT a real shop.** Products, finishes, prices, stock, shipping, policies and descriptions are fictitious. No real authentication, orders, payments, subscriptions, emails, shipping or backend services exist. Do not enter real personal or financial information into demonstration forms.

## Quick start

Requires Node.js 20.19+ or Node 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

```bash
npm test        # Run 7 data/logic tests without a browser
npm run build   # Build production site to dist/
npm run preview # Preview production build locally
```

### Deploy to Vercel

1. Push project to a new GitHub repository. Keep `vercel.json` at the repository root.
2. In Vercel, **Add New → Project** and import the repository.
3. Framework: **Vite**; root: `./`; build: `npm run build`; output: `dist`.
4. Deploy. SPA rewrites in `vercel.json` support refreshing `/shop`, `/cart`, `/checkout`, `/about` and `/product/:slug`.
5. Later changes pushed to the default Git branch redeploy automatically.

No environment variables are needed.

## Stack

- React 18 + JavaScript + Vite 6 + React Router 6
- Tailwind CSS 4 with `@tailwindcss/vite` and tokens in `src/index.css` (`@theme`)
- Lucide React icons
- React Context for cart/wishlist and toast feedback
- Native CSS transitions, responsive breakpoints and `prefers-reduced-motion`
- Web-hosted Google Fonts (Playfair Display + DM Sans) with system fallbacks
- Remote Unsplash editorial photography with browser fallback panels

No authentication, analytics, payment integration, external API calls or unnecessary runtime libraries.

## Brand system

**Name:** AUBE Objects (fictional)  
**Personality:** understated, tactile, considered, editorial  
**Palette:** Paper `#f4f1e9`, ink `#253027`, sage `#dbded3`, clay `#a46b56`, linen `#e6e0d3`  
**Typography:** Playfair Display (headlines) / DM Sans (body), Georgia + sans-serif fallback  
**Composition:** asymmetrical image-led hero, spacious typography, offset category crops, deliberately simple product cards  
**Motion:** short CSS transforms/fades for hover, no heavy scroll/animation dependency; reduced motion is respected.

## Pages / flows

| Page | Client-side behavior |
| --- | --- |
| `/` | Editorial hero, featured products, category links, studio story, newsletter demo |
| `/shop` | Query-driven category, price, finish, stock and saved-only filters; search; 4 sort modes; reset and empty state |
| `/product/:slug` | Gallery, enlarge view, variant selection, finish-specific demo availability, quantity caps, add to bag, wishlist, accordion |
| `/cart` | Shared cart, per-variant line items, quantity stepper, remove, subtotal, estimated delivery, empty state |
| `/checkout` | Demo-only form validation, delivery selection, order review and feedback **without placing an order** |
| `/about` | Editorial brand story; explains fictional nature |
| `/faq` | Accessible expand/collapse questions |
| `/shipping` | Clearly illustrative shipping and returns details |
| `/contact` | Validated **preview-only** contact form, no messages sent |
| `/privacy`, `/terms` | Demo policy explanations |
| `*` | Styled not-found state |

Header search uses a dialog with keyboard escape / focus management. The responsive menu, wishlist, pricing, filters, forms and cart are interactive. UI uses visible keyboard focus indicators and semantic elements.

### Browser-only persistence

- `localStorage['aube-demo-cart']` stores cart lines.
- `localStorage['aube-demo-wishlist']` stores product IDs.
- This is local browser storage, **not** a customer account or database.
- Cart and wishlist may be cleared using browser storage settings.
- Checkout, newsletter, and contact field values are **not submitted or persisted**.

### Mock data and replacement

- `src/data/products.js`: example products, variants, prices, categories and per-variant demo quantities.
- `src/data/photos.js`: central photo identifiers and URL formatting.
- `src/utils/filterProducts.js`: pure filter/sort selector.
- `src/utils/cart.js`: pure cart operations and subtotal calculation.
- `src/utils/validateCheckout.js`: checkout validation.
- `src/context/StoreContext.jsx`: global UI state and persistence.

This architecture allows a future developer to integrate a real backend later; no backend is included here.

## Photography and licensing

The imagery is *editorial reference photography* and **does not depict original fictional AUBE inventory**. Do not use the photos as evidence that products are being sold or supplied by the photographers. The photos are externally loaded from `images.unsplash.com` and therefore require connectivity; a visual fallback appears if a request fails. Photos were selected from individually labeled **free** Unsplash pages, rather than Unsplash+ images. Unsplash licensing details: <https://unsplash.com/license>. Attribution is appreciated even where not required.

| Asset key | Artist | Original photo |
| --- | --- | --- |
| `hero` | Mathilde Langevin | <https://unsplash.com/photos/white-ceramic-vase-on-brown-wooden-table-WUrXahlyjBo> |
| `studio` | Sebastian Monroy | <https://unsplash.com/photos/hands-shaping-clay-on-a-pottery-wheel-w6DiIGyPIa4> |
| `shelf` | Martin Baron | <https://unsplash.com/photos/ceramic-bowls-and-vases-on-a-shelf-EgRT1F8VOTs> |
| `roundVessel` | Tom Crew | <https://unsplash.com/photos/white-ceramic-vase-on-white-table-uDF1mW7EUwM> |
| `sculptural` | Oshin Khandelwal | <https://unsplash.com/photos/white-clay-vases-on-table-EQpXnijYejQ> |
| `pairMugs` | Tom Crew | <https://unsplash.com/photos/two-white-ceramic-mugs-INY4JowWde4> |
| `candle` | Veronika Martinelli | <https://unsplash.com/photos/white-ceramic-vase-on-white-book-ePUuKfAUwtA> |
| `shelfMugs` | Katja Vogt | <https://unsplash.com/photos/two-white-ceramic-mug-CipURjPCXOo> |
| `lavender` | Debby Hudson | <https://unsplash.com/photos/white-ceramic-vase-on-white-table-xK0R-FZT150> |
| `morningMugs` | Mel Poole | <https://unsplash.com/photos/two-white-ceramic-mugs-vQQoZzKO9Ig> |
| `linen` | Ben Ashby | <https://unsplash.com/photos/white-ceramic-vase-on-white-table-cloth-cu0sfI5fvgw> |
| `paleVessel` | Priscilla Du Preez | <https://unsplash.com/photos/white-ceramic-vase-on-black-table-XwEr2FhmnEo> |
| `smallBowl` | Josh Withers | <https://unsplash.com/photos/a-white-ceramic-bowl-sitting-on-top-of-a-white-table--iNP_kScIkY> |

**Production use:** replace editorial references with original brand/product imagery, ideally locally hosted compressed AVIF/WebP assets with multiple responsive sizes. Confirm all applicable usage and product representation rights before launching a real shop. External fonts/image hosts receive ordinary browser HTTP requests.

## Quality / verification

Seven Node `node:test` checks cover catalog consistency, filtering/search/sorting, finish-aware stock filtering, wishlist selection, shipping thresholds, cart quantities and subtotal calculation, and checkout validation. Static parsing and import checks were also run.

**Important environment limitation:** The build machine used for creating this project could not resolve `registry.npmjs.org` (`EAI_AGAIN`), so `npm install`, the Vite development server and `npm run build` **could not be completed here**. Thus, a production build and browser viewport/interaction test are **not verified**. Run `npm install && npm test && npm run build` in VS Code before pushing to GitHub or deploying to Vercel. If issues arise, check the console and dependencies before deployment.

## Source tree

```text
src/
  components/
    cart/CartRows.jsx
    home/Hero.jsx
    layout/Header.jsx, Footer.jsx
    products/ProductCard.jsx, ProductGrid.jsx
    ui/Brand.jsx, Photo.jsx, Toast.jsx
  context/StoreContext.jsx
  data/photos.js, products.js
  hooks/useFocusTrap.js
  pages/Home.jsx, Shop.jsx, ProductPage.jsx, Cart.jsx, Checkout.jsx, Information.jsx, NotFound.jsx
  utils/cart.js, filterProducts.js, format.js, validateCheckout.js
  App.jsx, main.jsx, index.css
public/favicon.svg
index.html, package.json, vite.config.js, vercel.json
```
