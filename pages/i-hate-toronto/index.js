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
  </Layout>
);

export default Main;
