import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/home";
import About from "./Pages/home/about";
import Contact from "./Pages/home/contact";
import Project from "./Pages/home/project";
import Blog from "./Pages/home/blog";
import Layout from "./layout/Layout";
import ProjectDes from "./Components/projectDescription";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="project/:id" element={<ProjectDes />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
