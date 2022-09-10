import { useState } from "react";
import {
  UserHeader,
  Navbar,
  MobilChart,
  DesktopChart,
  CardList,
} from "@components/";
import "./Home.scss";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="Home">
      <UserHeader />
      {windowWidth < 376 ? <MobilChart /> : <DesktopChart />}
      <CardList />
      <Navbar />
    </div>
  );
};

export default Home;
