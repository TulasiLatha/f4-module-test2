// components/ItemDetail.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h1>Detail Page</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>User ID: {post.userId}</p>
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default ItemDetail;
