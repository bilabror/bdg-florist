import { Routes, Route } from "react-router-dom";
import Beranda from "../pages/Beranda";
import Blog from "../pages/Blog";
import Forum from "../pages/Forum";
import Katalog from "../pages/Katalog";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/katalog" element={<Katalog />} />
    </Routes>
  );
}

export default Routers;
