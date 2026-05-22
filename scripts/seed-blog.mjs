import { createClient } from '@sanity/client';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Load .env.local manually (Node doesn't auto-read it)
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '..', '.env.local');
for (const line of readFileSync(envPath, 'utf8').split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function fetchWithRetry(url, attempts = 3) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      lastErr = e;
      console.log(`      retry ${i + 1}/${attempts} for ${url}: ${e.message}`);
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
  }
  throw lastErr;
}

async function uploadImageFromUrl(urls, filename) {
  const list = Array.isArray(urls) ? urls : [urls];
  let lastErr;
  for (const url of list) {
    try {
      const buf = await fetchWithRetry(url);
      const asset = await client.assets.upload('image', buf, { filename });
      return {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
      };
    } catch (e) {
      lastErr = e;
      console.log(`      source failed (${url}), trying next...`);
    }
  }
  throw lastErr;
}

async function upsert(doc) {
  const existing = await client.fetch(
    `*[_type == $type && slug.current == $slug][0]{_id}`,
    { type: doc._type, slug: doc.slug.current }
  );
  if (existing?._id) {
    console.log(`  ↻ updating ${doc._type}/${doc.slug.current}`);
    return await client.patch(existing._id).set(doc).commit();
  }
  console.log(`  + creating ${doc._type}/${doc.slug.current}`);
  return await client.create(doc);
}

function block(text, style = 'normal', markDefs = []) {
  return {
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 10),
    style,
    markDefs,
    children: [{ _type: 'span', _key: Math.random().toString(36).slice(2, 10), text, marks: [] }],
  };
}

function h2(text) { return block(text, 'h2'); }
function h3(text) { return block(text, 'h3'); }
function p(text) { return block(text); }

function bulletList(items) {
  return items.map((t) => ({
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 10),
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    markDefs: [],
    children: [{ _type: 'span', _key: Math.random().toString(36).slice(2, 10), text: t, marks: [] }],
  }));
}

// ─── Content ─────────────────────────────────────────────────────────────────

const author = {
  _type: 'author',
  name: 'Kainth Solutions Team',
  slug: { _type: 'slug', current: 'kainth-solutions-team' },
  role: 'Editorial Team',
  bio: 'Insights from the engineers, designers, and marketers at Kainth Solutions. We share what we learn building products and growing businesses.',
};

const categories = [
  {
    _type: 'category',
    title: 'Web Development',
    slug: { _type: 'slug', current: 'web-development' },
    description: 'Modern web engineering: frameworks, performance, and architecture.',
  },
  {
    _type: 'category',
    title: 'Digital Marketing',
    slug: { _type: 'slug', current: 'digital-marketing' },
    description: 'Growth, SEO, paid acquisition, and conversion strategies that drive measurable results.',
  },
];

const webDevPost = {
  title: 'Building Faster Websites in 2026: A Pragmatic Guide to the Modern Web Stack',
  slug: 'building-faster-websites-2026',
  excerpt:
    "Server components, edge rendering, and partial prerendering have changed what 'fast' actually means. Here's how we use them — and the trade-offs nobody talks about.",
  categorySlug: 'web-development',
  publishedAt: new Date().toISOString(),
  coverImageUrl: [
    'https://picsum.photos/seed/webdev2026/1600/900',
    'https://placehold.co/1600x900/1e3a5f/ffffff.png?text=Web+Development+2026',
  ],
  coverAlt: 'A developer working on a laptop with code on screen',
  content: [
    p("The web platform has quietly become one of the most powerful runtimes on the planet. What used to require a native app — instant interactions, smooth animations, real-time data — can now run inside a browser tab. But with that power comes a much wider menu of architectural choices, and choosing the wrong one will cost you users."),
    p("This is the stack we ship in 2026, what we'd skip, and the lessons we wish we'd learned earlier."),

    h2('Start with the rendering model, not the framework'),
    p("The biggest performance win is not which framework you pick — it's where your HTML is generated. The four practical choices today are static generation, server-side rendering, edge rendering, and client-side rendering. Most teams default to whichever their framework picks for them, and that's usually a mistake."),
    p('Static is unbeatable when content rarely changes. Edge rendering is the sweet spot for personalized but cacheable pages — think product detail pages with logged-in user data. Pure client-side rendering is now a niche choice; reserve it for genuinely interactive dashboards where SEO does not matter.'),
    p('Picking the wrong model adds 100–400ms to your time-to-first-byte. That alone can drop conversion rates by 5–10% on commerce sites. Audit your highest-traffic pages first.'),

    h2('Server Components are not magic — but they are a real win'),
    p("React Server Components let you write components that run only on the server and send zero JavaScript to the client. For content-heavy pages this is transformative: a typical marketing page that previously shipped 200 KB of React can now ship 20 KB."),
    p("The catch is that the mental model is genuinely different. State, event handlers, and browser APIs only exist in client components, and the boundary between server and client has to be explicit. Teams that try to retrofit RSCs into an existing client-first codebase usually end up with both worlds and the worst of each."),
    p("Our rule: server components by default, client components when you actually need interactivity, and a clear naming convention so reviewers can spot violations."),

    h2('The performance budget that actually works'),
    p("Most performance budgets fail because they are framed as ceilings ('the bundle must be under 250 KB') without any accountability. The version that works for us is a quarterly review tied to Core Web Vitals from real user monitoring."),
    p('We track three numbers per route:'),
    ...bulletList([
      'Largest Contentful Paint at the 75th percentile — under 2.5 seconds.',
      'Interaction to Next Paint at the 75th percentile — under 200 milliseconds.',
      'Cumulative Layout Shift — under 0.1.',
    ]),
    p('If a route regresses, the PR that caused it is the team that fixes it. This single policy did more for our performance than any specific optimization.'),

    h2('What to skip'),
    p("A few things that get a lot of hype but rarely move the business needle:"),
    ...bulletList([
      'Heavy state management libraries on content sites — the framework primitives are enough.',
      'Custom CSS-in-JS solutions — Tailwind plus a small set of design tokens covers 95% of cases with zero runtime cost.',
      'Micro-frontends below 5 teams — they add coordination overhead without solving a real problem at your scale.',
    ]),

    h2('What this means for your business'),
    p('Page speed is no longer a technical detail. Google reports that conversion rates drop by 4.42% for every additional second of load time on mobile. If your site is two seconds slower than your competitor, you are losing roughly 9% of every cohort that lands on it.'),
    p("The good news: the gap between a slow site and a fast one is mostly architectural decisions, not engineering hours. A two-week audit and rework on a modern stack typically pays for itself in the first month."),
  ],
};

const marketingPost = {
  title: 'The 90-Day Digital Marketing Playbook: From Spending to Compounding',
  slug: '90-day-digital-marketing-playbook',
  excerpt:
    'Most marketing budgets get spent, not invested. This is the operator playbook we use to turn the first 90 days of spend into a compounding growth engine — channel by channel.',
  categorySlug: 'digital-marketing',
  publishedAt: new Date().toISOString(),
  coverImageUrl: [
    'https://picsum.photos/seed/marketing90/1600/900',
    'https://placehold.co/1600x900/00a67e/ffffff.png?text=Digital+Marketing+Playbook',
  ],
  coverAlt: 'A marketing analytics dashboard showing growth charts',
  content: [
    p("Most companies treat their first 90 days of digital marketing as a series of experiments. The good ones treat it as a system. The difference shows up in month four: experimental budgets plateau, while systematic budgets start compounding."),
    p("Here is the playbook we run with new clients — the exact order, what to measure, and where to put each additional dollar."),

    h2('Days 1–30: Instrument before you spend'),
    p("Before a single ad goes live, every conversion event on your site needs to be reliably tracked end-to-end. This sounds obvious. It is also the single most common gap we find."),
    p('A working instrumentation layer means:'),
    ...bulletList([
      'Every meaningful action has a unique event name and fires once, not zero or twice.',
      'Server-side conversion APIs are wired up — browser pixels alone now miss 30–40% of conversions on iOS.',
      'You can answer "which channel drove this customer?" within 24 hours of a purchase, not three weeks.',
    ]),
    p("Spending money on ads without this is like pouring water into a bucket whose holes you cannot see. You will be unable to tell good campaigns from bad ones, and the bad ones will get more budget because they look profitable."),

    h2('Days 31–60: Run paid and SEO in parallel, not in sequence'),
    p('A common mistake is to treat SEO as something you do "later, once we have product-market fit." In reality the two channels work best when launched together, because paid traffic teaches you which queries actually convert, and SEO compounds against those proven queries for years.'),
    p('Our standard 60-day kickoff:'),
    ...bulletList([
      'Paid search on 20–30 high-intent keywords, with landing pages built specifically for each cluster.',
      'SEO targeting the same clusters, with content briefs informed by which paid pages convert.',
      'Retargeting on warm visitors, capped at frequency 3 per week to avoid burning the audience.',
    ]),
    p('By day 60 you should know the unit economics of each cluster cold. Cost per acquisition, conversion rate, and average order value, segmented by keyword theme.'),

    h2('Days 61–90: Double down and kill ruthlessly'),
    p("With 60 days of clean data you can finally make confident allocation decisions. This is where most teams flinch. They keep funding underperforming channels because cutting them feels wasteful."),
    p('It is not. Marketing dollars are a portfolio. The 70/20/10 split works:'),
    ...bulletList([
      '70% goes to proven channels with clear unit economics.',
      '20% goes to channels showing early positive signals but not yet proven.',
      '10% goes to genuine experiments — new platforms, new audiences, new creative formats.',
    ]),
    p('Anything that has been in the portfolio for 60+ days and is not in one of those three buckets gets cut. This single discipline is what turns spending into compounding.'),

    h2('The metrics that matter (and the ones that do not)'),
    p('Three metrics tell you whether your marketing is working:'),
    ...bulletList([
      'Customer Acquisition Cost (CAC), trending down or stable as you scale.',
      'Customer Lifetime Value to CAC ratio, ideally above 3:1.',
      'Payback period, ideally under 12 months for SaaS or under 90 days for ecommerce.',
    ]),
    p("Impressions, click-through rate, and follower count are diagnostic at best. They tell you why a number moved, but they should never be the number you optimize for."),

    h2('The compounding effect'),
    p("After 90 days run well, three things start to compound. Your SEO content begins ranking for clusters your paid campaigns proved out. Your retargeting audiences grow large enough to be meaningful. And your team has the data to make the next quarter's decisions in days rather than weeks."),
    p('That is the actual goal of the first 90 days: not the conversions themselves, but the engine that produces them predictably from day 91 onward.'),
  ],
};

// ─── Run ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Seeding Sanity dataset:', dataset);

  console.log('\n1. Author');
  const authorDoc = await upsert(author);

  console.log('\n2. Categories');
  const categoryDocs = {};
  for (const cat of categories) {
    const doc = await upsert(cat);
    categoryDocs[cat.slug.current] = doc;
  }

  console.log('\n3. Blog posts');
  for (const post of [webDevPost, marketingPost]) {
    const slug = post.slug;
    const existing = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]{_id}`,
      { slug }
    );

    console.log(`  · ${existing ? 'updating' : 'creating'} blogPost/${slug}`);

    console.log(`    uploading cover image...`);
    const cover = await uploadImageFromUrl(post.coverImageUrl, `${slug}.jpg`);
    cover.alt = post.coverAlt;

    const doc = {
      _type: 'blogPost',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      content: post.content,
      coverImage: cover,
      publishedAt: post.publishedAt,
      featured: false,
      category: { _type: 'reference', _ref: categoryDocs[post.categorySlug]._id },
      author: { _type: 'reference', _ref: authorDoc._id },
    };

    if (existing?._id) {
      await client.patch(existing._id).set(doc).commit();
    } else {
      await client.create(doc);
    }
  }

  console.log('\n✓ Done. Visit http://localhost:3000/blog');
}

main().catch((err) => {
  console.error('\n✗ Seed failed:', err.message);
  if (err.response?.body) console.error(err.response.body);
  process.exit(1);
});
