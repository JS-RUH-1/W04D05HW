// Post component will contain array of object that consist of image and title.

import { useState } from "react";
import Comments from "./Comments"
function Post() {
// ------------------------------------------------------------------------------
  const array = [
    {
      title: "Aesthetic",
      image:
        "https://i.pinimg.com/474x/28/51/27/285127b681c64a6dacc6d6286fa0c7b3.jpg",
    },
    {
      title: "When Marnie Was There",
      image:
        "https://i.pinimg.com/474x/0b/b3/84/0bb384e923aabfb54c12bc5ac5064117.jpg",
    },
    {
      title: "10:00pm",
      image:
        "https://i.pinimg.com/474x/80/bf/bd/80bfbd2a9b672126016d5ecdedea9a27.jpg",
    },
  ];

//  ------------------------------------------------------------------------------------- 

  return (
    <div>
      {array.map((e) => {
        return (
          <div>
            <h2>{e.title}</h2>
            <img src={e.image} />
              <Comments></Comments>
          </div>
        );
      })}
    </div>
  );
}
export default Post;