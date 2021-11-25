import "../styles/globals.css";
import { CustomHead } from "../components/CustomHead";
import { Layout } from "../components/Layout";

const Home = () => (
  <div className="container">
    <CustomHead
      title="Jordyn Marcellus - let's build a better future"
      seoPreviewTitle="Jordyn Marcellus is building a better future."
      seoPreviewContent="Jordyn is a web developer and propaghandist,  wielding the web to build a better future."
    />
    <Layout>
      <section id="greetings-earthling" className="fullscreen-page">
        <h1>Hi, I'm Jordyn</h1>
        <p>Let's build a better future together.</p>
      </section>
    </Layout>
  </div>
);

export default Home;
