import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import useAuthCheck from "./hook/useAuthCheck";
import Footer from "./Pages/Home/Footer";

function App() {
  const userStatus = useAuthCheck();
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
