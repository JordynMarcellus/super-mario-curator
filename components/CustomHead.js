import Head from "next/head";

export const CustomHead = ({ title, seoPreviewTitle, seoPreviewContent }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={seoPreviewContent} />
    <link rel="canonical" href="https://www.jordynmarcellus.com/" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={seoPreviewTitle} />
    <meta property="og:description" content={seoPreviewContent} />
    {/* <meta property="og:image" content="LINK TO THE IMAGE FILE" /> */}
    <meta property="og:url" content="https://www.jordynmarcellus.com" />
    {/* <meta property="og:site_name" content="SITE NAME" /> */}

    <meta name="twitter:title" content={seoPreviewTitle} />
    <meta name="twitter:description" content={seoPreviewContent} />
    {/* <meta name="twitter:image" content="LINK TO IMAGE" /> */}
    <meta name="twitter:site" content="@jordynmarcellus" />

    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
  </Head>
);
