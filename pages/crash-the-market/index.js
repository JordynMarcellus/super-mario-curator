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
        {/* policy linkouts */}
        {/* <section className=""></section> */}
        <section>
          <h2>Canaries in the coalmine</h2>
          <div className="w-full border-2">
            <h2>
              "Realtors say they’re seeing a trend where a number of units are
              being relisted because the seller’s original pricing strategy
              backfired."
            </h2>
            <a href="https://strata.ca/blog/has-the-gta-condo-market-finally-cooled-off-depends-what-youre-looking-for">
              Robert Van Rhijn, "Has the GTA Condo Market Finally Cooled Off?
              Depends What You’re Looking For", Strata.ca, November 2021
            </a>
          </div>
        </section>
      </article>
    </HeroBanner>
  </Layout>
);

export default Main;
