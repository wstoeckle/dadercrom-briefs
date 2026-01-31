# Dadbercrom-Briefs

Pre-distressed underwear for men who know what they want.

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Vercel will automatically detect Next.js and configure everything.

### Connect Your Domain (Namecheap)

After deploying to Vercel:

1. In Vercel, go to your project settings > Domains
2. Add your domain (e.g., dadbercrom-briefs.com)
3. Vercel will give you DNS records
4. In Namecheap, go to Domain List > Manage > Advanced DNS
5. Add the A record and CNAME records that Vercel provides
6. Wait a few minutes for DNS to propagate

## Image Generation Prompts (for nano-banana)

Use these prompts to generate product images:

### Product Hero Images
```
"High-quality product photography of men's white briefs with realistic wear patterns,
soft fading, slightly worn waistband elastic, comfortable broken-in appearance,
professional studio lighting, white background, fashion photography style"
```

```
"Lifestyle product photo of comfortable worn-in men's underwear laid flat,
showing authentic distressing, soft cotton texture, natural lighting,
minimalist aesthetic, e-commerce product photography"
```

### Humorous Lifestyle Shots
```
"Funny lifestyle photo concept: new package of briefs labeled 'Pre-Distressed'
with vintage-style packaging, retro aesthetic, humorous product photography,
professional lighting"
```

```
"Comic illustration of before/after comparison: brand new stiff briefs vs.
perfectly broken-in comfortable briefs, humorous infographic style,
clean vector art, blue and white color scheme"
```

### Social Media Content
```
"Humorous meme-style image: split screen showing men's attachment to
worn-in underwear vs partner's horror, comic illustration style,
modern social media aesthetic"
```

```
"Retro-style advertisement poster for 'Pre-Distressed Briefs',
1950s ad aesthetic, humorous copy, vintage colors, professional
advertising design"
```

## Waitlist vs Kickstarter

The site currently has a simple waitlist (stores emails in localStorage).

**Waitlist Pros:**
- Simple, no fees
- Quick to launch
- Low commitment for users
- Easy to gauge interest

**Kickstarter Pros:**
- Built-in audience
- Validates willingness to pay
- Generates buzz
- Handles payments

**Recommendation:** Start with the waitlist to test the concept. If you get 100+ signups in the first week, launch a Kickstarter to convert interest into sales.

## Next Steps

1. Deploy to Vercel
2. Generate product images with nano-banana
3. Replace placeholder emojis with actual product photos
4. Set up a proper email service (Mailchimp, ConvertKit, or Resend)
5. Add email collection API endpoint
6. Monitor waitlist signups
7. If traction looks good, plan Kickstarter campaign

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Language:** TypeScript
