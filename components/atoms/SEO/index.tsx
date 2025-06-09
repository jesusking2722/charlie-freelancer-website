import Head from "next/head";
import { FC } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
}

const defaultImage = "https://charlieunicorn.ai/og-default.png";
const defaultKeywords =
  "AI talent marketplace, hire AI developers, Web3 experts, post job AI, post job Web3, Charlie Unicorn AI";

const SEO: FC<SEOProps> = ({
  title,
  description,
  keywords = defaultKeywords,
  url,
  image = defaultImage,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL + url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
