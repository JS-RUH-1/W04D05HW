import React, { useEffect, useState } from "react";
import Mycomment from "./comment";
function Post(props) {

  const [arr, setArr] = useState([
    {
      posTitle: "First post",
      comment: "",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/Share_Multiple_Photos_and_Vide.jpeg?unoTzeJwAg_xbBQ0tXg8pxV5A5sl1VEO&size=770:433",
    },
    {
      posTitle: "Second post",
      comment: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7R4ydXlFIpSBpvvH6iCmHRzkMVS7mStNp7ISOMJJ4Ha9VC5BZloBd_4FYsb8GxHST-U&usqp=CAU",
    },
    {
      posTitle: "Third post",
      comment: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgfN8ghjrrR-XoJNtShZN3vE2RNiGjGCXeA&usqp=CAU",
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
              width={300}
              height={300}
              style={{ borderRadius: 10 }}
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
