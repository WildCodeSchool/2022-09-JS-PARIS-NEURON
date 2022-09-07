import { UserHeader, Navbar } from "../components";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <UserHeader />
      <Navbar />
    </div>
  );
}
