import { useState } from "react";
import { UserHeader, Navbar } from "../components";
import { MobilChart } from "../components/Charts/MobilChart";
import { DesktopChart } from "../components/Charts/DesktopChart";
import "./Home.scss";
import { CardList } from "../components/CardList/CardList";

export default function Home() {
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
}
