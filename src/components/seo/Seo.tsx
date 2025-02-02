// src/components/SEO/Seo.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

const SEO: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  author,
  publishedDate,
  modifiedDate,
}) => {
  const siteUrl = 'https://yourwebsite.com';
  const fullUrl = canonicalUrl ? canonicalUrl : siteUrl;
  const defaultImage = `${siteUrl}/default-og-image.jpg`;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content="Your Website Name" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional article metadata */}
      {author && <meta name="author" content={author} />}
      {publishedDate && <meta name="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta name="article:modified_time" content={modifiedDate} />}
    </Helmet>
  );
};

export default SEO;