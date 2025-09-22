import React, { useEffect, useState } from "react";
import OurProject from "../../../Components/ourProject/OurProject";

function Blog() {
  const [blog, setBlog] = useState([]);
  const filter = blog.slice(0, 10);
  const data = {
    heading: "Design insights and ideas",
    subHeading: "lorem ipsum fake dummy text here",
    project: filter,
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlog(data);
      });
  }, []);

  return <OurProject data={data} />;
}

export default Blog;
