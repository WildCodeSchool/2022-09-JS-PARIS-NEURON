import { useState } from "react";
import {
  UserHeader,
  Navbar,
  MobilChart,
  DesktopChart,
  NeuronList,
} from "@components/";
import "./Home.scss";

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <section className="home">
      <div className="home_content">
        <UserHeader className="userHeader" />
        <div className="chart">
          {windowWidth < 376 ? <MobilChart /> : <DesktopChart />}
        </div>
        <NeuronList className="neuronList" />
      </div>
      <Navbar />
    </section>
  );
};
