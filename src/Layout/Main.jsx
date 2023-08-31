import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
};

export default Main;
