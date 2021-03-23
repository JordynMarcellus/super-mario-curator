import Head from "next/head";

export const CustomHead = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Jordyn Marcellus - let's build a better future</title>
    <meta
      name="description"
      content="Jordyn Marcellus is a humble web developer building a better future."></meta>
    <link rel="canonical" href="http://www.jordynmarcellus.com/" />
    <meta name="robots" content="index, follow" />
    <meta property="og:type" content="website" />

    <meta
      property="og:title"
      content="Jordyn Marcellus is building a better future."
    />
    <meta
      property="og:description"
      content="Jordyn Marcellus's personal website, and the start of something good -- hopefully."
    />
    {/* <meta property="og:image" content="LINK TO THE IMAGE FILE" /> */}
    <meta property="og:url" content="https://www.jordynmarcellus.com" />
    {/* <meta property="og:site_name" content="SITE NAME" /> */}

    <meta
      name="twitter:title"
      content="Jordyn Marcellus: building a better future."
    />
    <meta
      name="twitter:description"
      content="Jordyn Marcellus's personal website, and the start of something good -- hopefully."
    />
    {/* <meta name="twitter:image" content="LINK TO IMAGE" /> */}
    <meta name="twitter:site" content="@jordynmarcellus" />

    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Karla&family=Raleway:wght@600&display=swap"
      rel="stylesheet"></link>
  </Head>
);
