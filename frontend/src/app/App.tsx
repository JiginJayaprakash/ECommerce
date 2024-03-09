import NavBar from "../components/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Checkout from "../User/Checkout";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-full">
      {!(location.pathname === "/login" || location.pathname === "/signup") && (
        <NavBar />
      )}
      <Outlet />
      {!(location.pathname === "/login" || location.pathname === "/signup") && (
        <Checkout />
      )}
    </div>
  );
};

export default App;
