import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookmarkBtn, handleMarkasread }) => {
  const {
    banner_img,
    banner_title,
    banner_hashtags,
    publish_date,
    author_img,
    author_name,
    reading_time,
  } = blog;

  return (
    <div className="border border-gray-300 p-12">
      <div className="border">
        <img className="w-full" src={banner_img} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 mt-9">
          <img src={author_img} className="w-14 rounded-full" alt="" />
          <div>
            <h4>{author_name}</h4>
            <p>{publish_date}</p>
          </div>
        </div>
        <div className="flex gap-x-3">
          <p>{reading_time} min read</p>
          <button onClick={() => handleBookmarkBtn(blog)}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold my-4">{banner_title}</h1>
      <p>
        {banner_hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="#">{hash} </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkasread(reading_time)}
        className="underline underline-offset-4 cursor-pointer text-[#6047EC] mb-4"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarkBtn: PropTypes.func,
  handleMarkasread: PropTypes.func
};
export default Blog;
