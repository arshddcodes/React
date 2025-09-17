import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About/About";
import Contact from "./Pages/home/contact/Contact";
import Project from "./Pages/home/project/Project";
import Blog from "./Pages/home/blog/Blog";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
