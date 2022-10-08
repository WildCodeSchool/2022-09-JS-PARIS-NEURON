import { useState } from "react";
import {
  UserHeader,
  Navbar,
  MobilChart,
  DesktopChart,
  NeuronList,
} from "@components/";
// import { Outlet } from "react-router";
import "./Home.scss";

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="home">
      <div className="home_content">
        <UserHeader />
        {windowWidth < 376 ? <MobilChart /> : <DesktopChart />}
        <NeuronList />
      </div>
      <Navbar />
      {/* <Outlet /> */}
    </div>
  );
};
