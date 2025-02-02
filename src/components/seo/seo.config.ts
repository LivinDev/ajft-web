// src/config/seo.config.ts
export const defaultSEO = {
  title: 'Your Website Name',
  description: 'Default description of your website',
  keywords: 'keyword1, keyword2, keyword3',
  ogImage: '/default-og-image.jpg',
  twitterCard: 'summary_large_image' as const,
};

export const pageSEO = {
  home: {
    title: 'Home | Your Website Name',
    description: 'Welcome to Your Website - Home page description',
    keywords: 'home, welcome, main',
  },
  about: {
    title: 'About Us | Your Website Name',
    description: 'Learn more about our company and mission',
    keywords: 'about us, company, mission, team',
  },
  volunteer: {
    title: 'Volunteer With Us | Your Website Name',
    description: 'Join our volunteer program and make a difference',
    keywords: 'volunteer, join us, community service, help',
  },
  contact: {
    title: 'Contact Us | Your Website Name',
    description: 'Get in touch with us. We\'d love to hear from you',
    keywords: 'contact, reach out, support, help',
  },
};