import { Layout } from "../../components/Layout";
import { CustomHead } from "../../components/CustomHead";
import { HeroBanner } from "../../components/HeroBanner";
const Main = () => (
  <Layout>
    <CustomHead
      title="It's time to crash Toronto's housing market"
      seoPreviewTitle="Crash The Market"
      seoPreviewContent="The only way to stop housing exploitation is to take the money out of it."
    />
    <HeroBanner>
      <article className="prose lg:prose-2xl">
        <h1>Crash the market 🏠📉📉📉</h1>
        <p>
          Canada’s ruling class is addicted to debt-driven real estate
          investing. Crashing the market is the only way to true housing
          affordability.
        </p>
      </article>
    </HeroBanner>
  </Layout>
);

export default Main;
