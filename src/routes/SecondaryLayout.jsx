import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const SecondaryLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default SecondaryLayout;