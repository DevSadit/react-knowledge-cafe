import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect( ()=>{
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  },[])
  return (
    <div>
      <h3>Length: {blogs.length}</h3>
    </div>
  );
};

export default Blogs;
