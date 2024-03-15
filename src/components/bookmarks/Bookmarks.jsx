import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, markAsRead }) => {
  return (
    <div className="w-1/3 border bg-[#1111110D] p-7">
      <div>
        <h1>Reading Time : {markAsRead}</h1>
      </div>
      <h2 className="text-2xl font-bold">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};


Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
  markAsRead : PropTypes.number
};
export default Bookmarks;