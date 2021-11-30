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
          Toronto's ruling class is addicted to debt-driven real estate
          investing. Covid gave them the opportunity to exploit the rest of
          Canada like they have Toronto for centuries.
        </p>
        <p>Want affordable housing? We need to crash the market.</p>
        <section>
          <h2>
            The political economy of Toronto housing is
            <em>
              <strong> fucked</strong>
            </em>
          </h2>
          <p>
            {/* data about percentage of Cdn real estate "investors" */}
            For decades, people across the GTA have scrimped and saved to
            achieve house poverty. They were sold a dream: real estate only goes
            up (never mind the crash of '89), so they can put all their money
            into the basket that is selling their house and retiring off the
            gains.
          </p>
          <p>
            This has created an untenable polical-economic climate which
            incentivizes Toronto homeowners to push back against any and all
            housing that might reduce their property values one iota. Which
            often means resisting denser housing.
          </p>
          <p>
            In this climate, parasites like house flippers and wannabe slumlords
            weasel out of the woodwork. They buy up homes, do surface
            renovations then charge and arm and a leg for the privilege of
            living in Toronto.
          </p>
          <p>
            Choices made by every level of government -- by every political
            party -- has got us here. Land speculation and housing exploitation
            is built into Toronto's very DNA.
          </p>
          <p>
            So, we need to crash the market. Because once the money's taken out
            of it, we can build a better Toronto.
          </p>
        </section>
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
