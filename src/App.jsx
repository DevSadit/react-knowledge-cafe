import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead]= useState(0);

  const handleBookmarkBtn = (blog) => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkasread = time => {
    setMarkAsRead(markAsRead + time);
  }
  return (
    <>
      <Header></Header>
      <div className="flex mx-auto container gap-x-5 mt-5">
        <Blogs
          handleBookmarkBtn={handleBookmarkBtn}
          handleMarkasread={handleMarkasread}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
      </div>
    </>
  );
}

export default App;
