import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/itemActions';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.items.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="bg-white p-4 mb-4 rounded shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default PostsList;
