import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { banner_title } = bookmark;
  return <div>
    <h3 className='text-xl font-semibold p-5 bg-white mt-4 rounded-xl'>{banner_title}</h3>
  </div>;
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;