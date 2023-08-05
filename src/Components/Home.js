// components/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/item/${post.id}`}>
                <img src={post.imgSrc} alt={`Post ${post.id}`} />
                <h3>{post.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
