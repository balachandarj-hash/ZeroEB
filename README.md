# ZeroEB

Website for [ZeroEB](https://zeroeb.com), a residential rooftop solar installer based in Madipakkam, Chennai. It includes the public pages, locality guides, articles, project photos, and the enquiry forms that email the office.

The live site is still hosted on Hostinger. This project is the copy you can publish, then point `zeroeb.com` at.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## What is included

- Home, about, services, Chennai installation, labour-only installation, panel cleaning, work gallery, contact, quote, videos, and blog
- Locality pages for the Chennai neighbourhoods already on zeroeb.com
- Enquiry forms (quote, contact, cleaning, installation) that email `ecopower2026@gmail.com` through the same FormSubmit inbox the current site uses
- Redirects from the old `.html` addresses, including the neighbourhood URLs, so existing links keep working after the domain moves

## Connect zeroeb.com

Publishing does not change the live Hostinger site until DNS is updated.

1. Publish this project with the Publish button. Vercel will give you a preview URL. Check that URL before touching DNS.
2. In the Vercel project, add `zeroeb.com` and `www.zeroeb.com`.
3. Vercel will show the records to create. At Hostinger (hPanel → DNS for zeroeb.com), set them. They are usually:
   - `A` record on `@` → `76.76.21.21`
   - `CNAME` record on `www` → `cname.vercel-dns.com`
4. Remove conflicting Hostinger `A` or parking records for `@` and `www` only after the new records are in place.
5. Wait for DNS to propagate. Vercel will issue HTTPS once the records match.

Until that DNS change, https://zeroeb.com keeps serving the Hostinger site.

Google Search Console and Bing verification tags from the current site are already in the page head, so the domain can stay verified after the switch.
