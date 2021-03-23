export const Layout = ({ children }) => (
  <main>
    {children}
    <style global jsx>
      {`
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

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
        li,
        label {
          margin-top: 0;
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
  </main>
);
