import * as React from "react";

import ImageQR from "./assets/image-qr-code.png";

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex justify-center items-center flex-col w-72 p-3 rounded-xl text-center gap-3"
        style={{ backgroundColor: "white" }}
      >
        <img className="rounded-lg" src={ImageQR} alt="QR" />
        <h1
          className="font-[700] text-xl"
          style={{ color: "hsl(218, 44%, 22%)" }}
        >
          Improve your front-end skills by building projects
        </h1>
        <p className="text-sm p-2" style={{ color: "hsl(220, 15%, 55%)" }}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default App;
