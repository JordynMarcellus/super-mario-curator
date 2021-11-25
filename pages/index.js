import { CustomHead } from "../components/CustomHead";
import { Layout } from "../components/Layout";

const Home = () => (
  <>
    <CustomHead
      title="Jordyn Marcellus - let's build a better future"
      seoPreviewTitle="Jordyn Marcellus is building a better future."
      seoPreviewContent="Jordyn is a web developer and propaghandist,  wielding the web to build a better future."
    />
    <Layout>
      <section className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl my-2">Hi, I'm Jordyn</h1>
        <p className="text-2xl text-center">
          Let's build a better future together.
        </p>
      </section>
    </Layout>
  </>
);

export default Home;
