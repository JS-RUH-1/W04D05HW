// import React, { useState } from "react";

// const Comments = (props) => {



//     const deleteComment = (id) => {
//         console.log(props.comment[id - 1]);
//         // console.log(id);
//     }

//     return ( 
//         <div className="comments">
//             <div>
//                 {props.comment.map((ele, index) => (
//                     <div className="singleComment" key={index}>
//                         <div>{ele.comment}</div>
//                         <i className="far fa-trash-alt" onClick={() => deleteComment(ele.id)}></i>
//                     </div>
//                 ))}
//             </div>
//         </div>
//      );
// }
 
// export default Comments;