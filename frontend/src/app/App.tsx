import NavBar from '../components/NavBar'
import { Outlet } from "react-router-dom";
import './App.css';
import Checkout from '../User/Checkout';

const App = () => {
  return (
    <div className="min-h-full">
        <NavBar />
        <Outlet />
        <Checkout />
      </div>
  );
}

export default App;
