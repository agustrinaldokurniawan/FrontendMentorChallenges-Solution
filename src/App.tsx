import * as React from "react";

import illustration from "./assets/illustration-hero.svg";
import iconMusic from "./assets/icon-music.svg";

const App: React.FC = () => {
  // fastest way for hover logic but also the worst way, not for production, need separated to each component file
  const [hoverChange, setHoverChange] = React.useState(false);
  const [hoverPayment, setHoverPayment] = React.useState(false);
  const [hoverCancel, setHoverCancel] = React.useState(false);

  return (
    <div className="h-screen flex justify-center items-center bg-pale-blue bg-contain lg:bg-[url(./assets/pattern-background-desktop.svg)] bg-[url(./assets/pattern-background-mobile.svg)] bg-no-repeat">
      <div className="flex flex-col w-96 rounded-lg bg-white text-center gap-4">
        <img
          src={illustration}
          alt="Happy order!"
          className="rounded-tl-lg rounded-tr-lg"
        />
        <div className="flex flex-col px-10 py-6 gap-6">
          <h2 className="font-black text-dark-blue text-2xl">Order Summary</h2>
          <p className="text-desaturated-blue">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex bg-very-pale-blue p-4 rounded-lg justify-between items-center">
            <div className="flex gap-4">
              <img src={iconMusic} alt="Icon Music" />
              <div className="flex flex-col">
                <h3 className="font-semibold text-dark-blue">Annual Plan</h3>
                <p className="text-desaturated-blue">$59.99/year</p>
              </div>
            </div>
            <p
              onMouseEnter={() => setHoverChange(true)}
              onMouseLeave={() => setHoverChange(false)}
              className={`cursor-pointer underline text-bright-blue font-semibold ${
                hoverChange && "no-underline opacity-75"
              }`}
            >
              Change
            </p>
          </div>
          <button
            onMouseEnter={() => setHoverPayment(true)}
            onMouseLeave={() => setHoverPayment(false)}
            className={`${
              hoverPayment && "opacity-75 shadow-lg shadow-bright-blue/40"
            } bg-bright-blue text-white py-3 rounded-lg font-semibold shadow-lg shadow-bright-blue/75`}
          >
            Proceed to Payment
          </button>
          <button
            onMouseEnter={() => setHoverCancel(true)}
            onMouseLeave={() => setHoverCancel(false)}
            className={`${
              hoverCancel && "text-black "
            } text-desaturated-blue font-semibold`}
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
