import React, { useState } from "react";
import Comment from "./Comment";
import "../index.css";

function Post() {
  const [post, setPost] = useState([
    {
      title: "Post 1",
      comments: "",
      imgsrc:
        "https://images.unsplash.com/photo-1607919564479-c2e00f3b14a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2883&q=80",
    },
    {
      title: "Post 2",
      comments: "",
      imgsrc:
        "https://images.unsplash.com/photo-1607196707151-2db8b71294ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=894&q=80",
    },
    {
      title: "Post 3",
      comments: "",
      imgsrc:
        "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Post 4",
      comments: "",
      imgsrc:
        "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Post 5",
      comments: "",
      imgsrc:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
    },
    {
      title: "Post 6",
      comments: "",
      imgsrc:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Post 7",
      comments: "",
      imgsrc:
        "https://images.unsplash.com/photo-1514537099923-4c0fc7c73161?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Post 8",
      comments: "",
      imgsrc:
        "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Post 9",
      comments: "",
      imgsrc:
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    },
  ]);

  return (
    <div>
      <div>
        <h1>Hello</h1>
        <br /> <br />
      </div>

      <div className="posts">
        {post.map((p) => (
          <div>
            <img src={p.imgsrc} alt="" width="320" height="400" />

            <h3>{p.title}</h3>

            <Comment />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
