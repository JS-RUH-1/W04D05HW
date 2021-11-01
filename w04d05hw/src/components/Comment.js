import React, { useState } from "react";

function Comment(props) {
    const [comments,setComments]=useState([['Welcome','Hi'],['First comment','first second comment']])
    return (
        <div className="comments">{comments[props.id]==undefined?"":comments[props.id].map((e)=>(<h6 className="comment">{e}</h6>))}</div>
     );
}

export default Comment;