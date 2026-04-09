import { groq } from 'next-sanity';

// ─── Projects ────────────────────────────────────────────────────────────────

export const getAllProjectsQuery = groq`
  *[_type == "project" && defined(slug.current)
    ${''/* category filter is injected at call-site via param */}
  ] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    thumbnail,
    category,
    client,
    year,
    techStack,
    liveUrl,
    featured,
    order
  }
`;

export function getAllProjectsWithCategoryQuery(category?: string) {
  if (!category || category === 'all') {
    return groq`
      *[_type == "project" && defined(slug.current)]
        | order(order asc, _createdAt desc) {
        _id,
        title,
        slug,
        description,
        thumbnail,
        category,
        client,
        year,
        techStack,
        liveUrl,
        featured,
        order
      }
    `;
  }

  return groq`
    *[_type == "project" && defined(slug.current) && category == $category]
      | order(order asc, _createdAt desc) {
      _id,
      title,
      slug,
      description,
      thumbnail,
      category,
      client,
      year,
      techStack,
      liveUrl,
      featured,
      order
    }
  `;
}

export const getFeaturedProjectsQuery = groq`
  *[_type == "project" && featured == true && defined(slug.current)]
    | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    thumbnail,
    category,
    client,
    year,
    techStack,
    liveUrl,
    featured,
    order
  }
`;

export const getProjectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    thumbnail,
    images,
    category,
    client,
    year,
    techStack,
    liveUrl,
    featured,
    order
  }
`;

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const getAllBlogPostsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)]
    | order(publishedAt desc)
    [$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    featured,
    category->{
      _id,
      title,
      slug
    },
    author->{
      _id,
      name,
      slug,
      image,
      role
    }
  }
`;

export const getBlogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    coverImage,
    publishedAt,
    featured,
    seo,
    category->{
      _id,
      title,
      slug
    },
    author->{
      _id,
      name,
      slug,
      image,
      bio,
      role,
      social
    }
  }
`;

// ─── Categories ──────────────────────────────────────────────────────────────

export const getAllCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

// ─── Testimonials ────────────────────────────────────────────────────────────

export const getAllTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    clientName,
    role,
    company,
    quote,
    rating,
    avatar,
    featured
  }
`;

// ─── Site Settings ───────────────────────────────────────────────────────────

export const getSiteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    companyName,
    logo,
    tagline,
    description,
    email,
    phone,
    address,
    socialLinks,
    footerText
  }
`;

// ─── Services ────────────────────────────────────────────────────────────────

export const getServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    tagline,
    description,
    content,
    features,
    order
  }
`;
