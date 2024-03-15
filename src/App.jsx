import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmarks/Bookmark'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App
