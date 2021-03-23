import { CustomHead } from "../components/CustomHead";
import { Layout } from "../components/Layout";

const Home = () => (
  <div className="container">
    <CustomHead />
    <Layout>
      <section id="greetings-earthling" className="fullscreen-page">
        <h1>Hi, I'm Jordyn</h1>
        <p>Let's build a better future together.</p>
      </section>
    </Layout>
  </div>
);

export default Home;
