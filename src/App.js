import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import UserPanel from "./components/User/UserPanel";
import About from "./components/Pages/About";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/user-panel" element={<UserPanel />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
