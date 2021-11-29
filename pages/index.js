import { CustomHead } from "../components/CustomHead";
import { Layout } from "../components/Layout";
import { HeroBanner } from "../components/HeroBanner";
const Home = () => (
  <>
    <CustomHead
      title="Jordyn Marcellus - let's build a better future"
      seoPreviewTitle="Jordyn Marcellus is building a better future."
      seoPreviewContent="Jordyn is a web developer and propaghandist,  wielding the web to build a better future."
    />
    <Layout>
      <HeroBanner>
        <article className="prose lg:prose-xl ">
          <h1>Hi, I'm Jordyn</h1>
          <p>Let's build a better future together.</p>
        </article>
      </HeroBanner>
    </Layout>
  </>
);

export default Home;
