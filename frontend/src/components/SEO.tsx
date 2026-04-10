import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
}

export default function SEO({ title, description }: SEOProps) {
  const base = 'Your Name — Full Stack Developer'
  const fullTitle = title ? `${title} | ${base}` : base
  const desc = description || 'Full stack developer for hire. React, Python, Spring Boot, Node.js, AI.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content="freelance developer, react, python, full stack, hire developer" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}