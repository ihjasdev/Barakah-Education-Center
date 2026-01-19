import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterHandle?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "Barakah Education Center | Transforming Lives Through Education",
    description = "Barakah Education Center provides high-quality, professional technical training in Sri Lanka. From Web Development to Graphic Design, we empower youth through education and scholarships.",
    canonical = "https://barakah-edu.com",
    ogType = "website",
    ogImage = "/assets/og-image.jpg", // Default OG image
    twitterHandle = "@BarakahEdu",
}) => {
    const siteName = "Barakah Education Center";
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* OpenGraph Tags */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Helmet>
    );
};

export default SEO;
