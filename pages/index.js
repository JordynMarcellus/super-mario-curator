import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Jordyn Marcellus - let's build a better future</title>
      <meta
        name="description"
        content="Jordyn Marcellus is a humble web developer who's building a better future."></meta>
      <link rel="canonical" href="http://example.com/" />
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

      <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
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
    <main>
      <section id="greetings-earthling" className="fullscreen-page">
        <h1>Hi, I'm Jordyn</h1>
        <p>Let's build a better future together.</p>
      </section>
    </main>
    <style global jsx>
      {`
        body {
          background: black;
          font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1440 - 320)));
        }
        main {
          height: 100vh;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        li {
          color: white;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Raleway", sans-serif;
        }

        p,
        li {
          font-family: "Karla", sans-serif;
        }

        .fullscreen-page {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}
    </style>
  </div>
);

export default Home;
