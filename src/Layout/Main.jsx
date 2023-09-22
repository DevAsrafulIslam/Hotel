import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
};

export default Main;
