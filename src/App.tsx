import * as React from "react";

import mainImage from "./assets/image-equilibrium.jpg";
import iconEth from "./assets/icon-ethereum.svg";
import iconClock from "./assets/icon-clock.svg";
import avatarImage from "./assets/image-avatar.png";
import iconView from "./assets/icon-view.svg";

const App: React.FC = () => {
  const [cardHover, setCardHover] = React.useState(false);
  const [nameHover, setNameHover] = React.useState(false);
  return (
    <div className="flex flex-col w-80 p-4 gap-4 rounded-lg bg-dark-blue-2">
      <span
        className="relative cursor-pointer"
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
      >
        <span
          className={`bg-cyan w-full h-full z-10 rounded-lg absolute flex items-center justify-center opacity-50 ${
            !cardHover && "hidden"
          }`}
        ></span>

        <img
          src={iconView}
          alt="View"
          className={`absolute left-1/2 top-1/2 -translate-x-2/4 z-20 -translate-y-2/4 rounded-lg w-14 h-14 ${
            !cardHover && "hidden"
          }`}
        />
        <img src={mainImage} alt="Equilibrium" className="rounded-lg" />
      </span>
      <h1
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
        className={`${
          cardHover ? "text-cyan" : "text-white"
        } font-semibold cursor-pointer`}
      >
        Equilibrium #3429
      </h1>
      <p className="text-soft-blue">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <span className="flex justify-between">
        <span className="flex gap-2">
          <img src={iconEth} alt="Ethereum" />
          <h2 className="text-cyan text-sm font-semibold">0.041ETH</h2>
        </span>
        <span className="flex gap-2">
          <img src={iconClock} alt="Clock" />
          <h2 className="text-soft-blue text-sm font-semibold">3 days left</h2>
        </span>
      </span>
      <hr className="border-dark-blue-1" />

      <span className="flex gap-2">
        <span className="w-11 h-11 bg-white rounded-full absolute"></span>
        <img
          src={avatarImage}
          alt="Clock"
          className="w-10 h-10 z-10 ml-0.5 mt-0.5"
        />
        <span className="text-soft-blue flex text-sm items-center">
          <p>Creation of </p>
          <p
            onMouseEnter={() => setNameHover(true)}
            onMouseLeave={() => setNameHover(false)}
            className={`${
              nameHover ? "text-cyan" : "text-white"
            } cursor-pointer`}
          >
            Jules Wyvern
          </p>
        </span>
      </span>
    </div>
  );
};

export default App;
