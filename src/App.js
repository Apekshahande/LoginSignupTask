import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Info from "./Info";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}
