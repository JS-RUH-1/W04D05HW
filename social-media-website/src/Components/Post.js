import React, { useState } from "react";
import Comment from "./Comment";
export default function Post() {
  const [posts, setPosts] = useState([
    {
      title: "First Post",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyY7YgvP3I6IwqiS-BiejUSEOXqaxl30CSQ&usqp=CAU",
      comments: "",
    },
    {
      title: "Second Post",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYhJ1FG8ZSoxAP8dDZ6VjeHde3Cbb55tKOQ&usqp=CAU",
      comments: "",
    },
    {
      title: "Third Post",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_eBQEjbn5zqrmuChKtxENLrGttOcUzBCfw&usqp=CAU",
      comments: "",
    },
  ]);
  return (
    <>
      <div className="mb-5">
        <h1>Welcome </h1>
      </div>
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="postContainer">
              <img src={post.imgUrl} height="250px" width="500px" alt="img" />
              <h4>{post.title}</h4>
              <Comment />
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
