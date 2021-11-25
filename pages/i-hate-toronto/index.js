import { Layout } from "../../components/Layout";
import { Input } from "../../components/forms/Input";
import { TextArea } from "../../components/forms/TextArea";
import { CustomHead } from "../../components/CustomHead";

const Main = () => (
  <Layout>
    <CustomHead
      title="Torontonians taking back the city from the ruling class."
      seoPreviewTitle="I Hate Toronto"
      seoPreviewContent="Toronto is decadent and depraved. Let's shine a light on it."
    />
    <section className="h8-center">
      <h1>Toronto is decadent and depraved.</h1>
      <p>As the pandemic raged, renovictions surged.</p>
      <p>Vacancies increase as rents rise.</p>
      <p>The greedy, tasteless ruling class has won.</p>
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
