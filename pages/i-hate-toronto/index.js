import { Layout } from "../../components/Layout";
import { Input } from "../../components/forms/Input";
import { TextArea } from "../../components/forms/TextArea";
const Main = () => (
  <Layout>
    <section className="h8-center">
      <h1>Toronto is decadent and depraved.</h1>
      <p>Feel the same? Let me know.</p>
      <form name="intros" method="POST" data-netlify="true">
        <Input type="email" name="email" labelText="Email" required={true} />
        <Input
          type="text"
          name="name"
          labelText="Name (optional)"
          required={false}
        />
        <TextArea
          name="message"
          required={true}
          labelText={"What do you hate about Toronto?"}
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        FYI: we collect your information with Netlify Forms over a secure
        connection. Be chill.
      </p>
    </section>
    <style jsx>
      {`
        button {
          margin-bottom: 1rem;
          padding: 1rem;
        }

        form {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .h8-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: left;
          width: 100%;
          padding: 1rem;
          margin: 0 auto;
        }
        @media (min-width: 40rem) {
          .h8-center {
            width: 40rem;
          }
        }
      `}
    </style>
  </Layout>
);

export default Main;
