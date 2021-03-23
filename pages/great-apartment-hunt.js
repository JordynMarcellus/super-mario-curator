import { useState } from "react";

const FORM_ENUM = {
  LANDLORD: "LANDLORD",
  AGENT: "AGENT",
};

const GreatApartmentHunt = () => {
  const [whichForm, setWhichForm] = useState(null);
  return (
    <div>
      <h1>Help Jordyn and Sheena look for a new apartment</h1>
      <div>
        <p>
          COVID-19 has caused many people across Toronto to search for more
          space; we're no different. We remain committed to making Toronto a
          great place to live, and that means we want to find our own great
          place to thrive in this new normal.
        </p>
      </div>
      <div>
        <h2>Who we are</h2>
        <p>
          Sheena Goodyear is a full-time journalist with the CBC; she helps
          transform As It Happens radio content into web-ready stories. Jordyn
          Marcellus is a full-time software developer with the American
          <a href="link/to/story">unicorn company VTS.</a>
        </p>
        <p>
          We've lived in the same cozy Annex apartment for the last ten years,
          and want to use this moment in time as an opportunity to find a new
          space to kick off this new decade.
        </p>
      </div>
      <div>
        <h2>The detalis</h2>
        <p>
          Our budget follows Canadian Mortgage Housing Corporation's affordable
          housing guidelines; therefore, we've set our maximum budget at
          $3000/month. Our needs, the things that are non-negotiable include:
          <ul>
            <li>Private outdoor space (e.g. balcony, backyard)</li>
            <li>2 bedrooms</li>
            <li>Downtown (Dufferin -> Don, Dupont -> water)</li>
            <li>A bathtub -- no creepy shower stalls!</li>
            <li>Laundry in building</li>
          </ul>
        </p>
        <p>
          We also have more than a few wants -- things we'd like to have in an
          ideal space, but are willing to compromise on.
          <ul>
            <li>Large kitchen</li>
            <li>1000+ sqft</li>
            <li>3 bedrooms</li>
            <li>home or townhouse</li>
            <li>Ensuite laundry</li>
          </ul>
        </p>
        <p>
          And a few hard nos:
          <ul>
            <li>No basement apartments -- we're terrified of centipedes 💀</li>
          </ul>
        </p>
        <div>
          {!whichForm && (
            <>
              <button onClick={() => setWhichForm(FORM_ENUM.LANDLORD)}>
                I'm a landlord looking to rent
              </button>
              <button onClick={() => setWhichForm(FORM_ENUM.AGENT)}>
                I'm a real estate professional seeking to represent
              </button>
            </>
          )}
          {whichForm && whichForm === FORM_ENUM.LANDLORD && (
            <p>
              If you're interested in discussing renting a space with Sheena and
              I, please leave a message in our contact form below. We promise to
              get back to you within 48 hours.
            </p>
          )}
          {whichForm && whichForm === FORM_ENUM.AGENT && (
            <p>
              Real estate professionals looking to represent us in our search,
              please fill out the extended contact form to determine if we're a
              good match.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GreatApartmentHunt;
