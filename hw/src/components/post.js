import React, { useEffect, useState } from "react";
import Mycomment from "./comment";
function Post(props) {

  const [arr, setArr] = useState([
    {
      posTitle: "First post",
      comment: "",
      image:
        "https://media.almayadeen.tv/archive/image/2020/6/18/e063130d-751a-4934-8753-f01f758c7428.png?v=3",
    },
    {
      posTitle: "Second post",
      comment: "",
      image:
        "https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ",
    },
    {
      posTitle: "Third post",
      comment: "",
      image:
        "https://whatsnewinpublishing.com/wp-content/uploads/2017/02/snapchat.jpg",
    },
  ]);


  return (
    <div>
      <h1>Posts Page</h1>
      <div className="container">

        {arr.map((e, index) => (
          <div className="mycon">
            <img
              src={e.image}
              alt={""}
              width={400}
              height={300}
              style={{ borderRadius: 5 }}
            />
            <h4>{e.posTitle}</h4>
            <Mycomment  />
          
          </div>
        ))}

      </div>
    </div>
  );
}

export default Post;
