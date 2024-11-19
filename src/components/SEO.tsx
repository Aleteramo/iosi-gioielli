import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = 'https://iosigioielli.com/images/og-default.jpg',
  ogType = 'website',
  canonicalUrl,
}: SEOProps): Metadata {
  const metaTitle = `${title} | IO Sì Gioielli - Diamanti Lab Grown`;
  const metaDescription = `${description} | Gioielli Italiani con Diamanti Lab Grown | IO Sì Gioielli`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      'gioielli italiani',
      'diamanti lab grown',
      'gioielli sostenibili',
      'diamanti coltivati',
      'gioielli artigianali',
      'anelli con diamanti',
      'collane con diamanti',
      'bracciali con diamanti',
      'gioielli di lusso',
      'gioielli etici',
      ...keywords,
    ].join(', '),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl || 'https://iosigioielli.com',
      siteName: 'IO Sì Gioielli',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'it_IT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    metadataBase: new URL('https://iosigioielli.com'),
  };
}
