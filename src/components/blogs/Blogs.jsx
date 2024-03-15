import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmarkBtn, handleMarkasread }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mx-auto container">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleBookmarkBtn={handleBookmarkBtn}
          handleMarkasread={handleMarkasread}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};


Blogs.propTypes = {
  handleBookmarkBtn: PropTypes.func,
  handleMarkasread : PropTypes.func,
};
export default Blogs;