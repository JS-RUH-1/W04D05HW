import { useState } from "react";

import "../index.css";

function Comment() {
  const [comments, setComments] = useState([]);
  const [save, setSave]=useState("");

  const handelDelete = (index) => {
    const commentTemp = [...comments];
    commentTemp.splice(index, 1);
    setComments(commentTemp);
  };
  const addComment = ()=>{
      if(save === "") 
      return;
      setComments([...comments,save]);
  }

  return (
    <div className="container">
        <div>
          {/* map on comments array to display */}
          {comments.map((comment, index) => (
            <div className="comment">
              <p>{comment}<span><button onClick={() => handelDelete(index)} class='redContained float-right'>Delete</button></span></p>
            </div>
          ))}
      </div>
      <div >
          <textarea  type="text" onChange={(e)=>setSave(e.target.value)} className="input" placeholder="Write a comment"></textarea>
          <p><button onClick={()=>addComment()} class='primaryContained float-right' type="submit">Add Comment</button></p>
      </div>
    </div>
  );
}

export default Comment;
