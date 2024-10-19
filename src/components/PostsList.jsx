import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/itemActions';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.items.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {paginatedPosts.length > 0 ? (
        paginatedPosts.map((post) => (
          <div key={post.id} className="bg-white p-4 mb-4 rounded shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}

      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= Math.ceil(posts.length / itemsPerPage)}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsList;
