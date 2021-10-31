// Add a comment component where a user can add a comment, delete it for each post.
import { useState,useEffect } from "react";


function Comments() {
const [comment, setComment]= useState([])
let arr;

    arr=comment.map((item, index)=>{
      return (
        <div>
        <li  key={index} onClick={deleteItem.bind(this, index)}>{item}<sup>X</sup></li>
        </div>
      )
    })
    function handelAdd(e) {
        e.preventDefault();
        let value = e.target[0].value;
        const newarr=comment.slice()
        newarr.push(value);
        // Comment=[...Comment];
        setComment(newarr);
        };
      
      // function xxx(e){
      //   let del=e.target.value;
      //   del.remove()
      // }
      // function removeItem(index){
      //   console.log(index)
        // const newarry=comment.slice()
        // newarry.splice(index, 1);
        // setComment(newarry);
        // }
        // -----------------------------------------------------------------------
        function deleteItem(index){
          console.log(index);
          const newarry=comment.slice();
           newarry.splice(index, 1);
           setComment(newarry);
      };
      
    return ( 
     <div>
         <form onSubmit={handelAdd}>
         <label for="text">Comment:</label>
         <input type="text" />
         <button type="submit" >Comment</button>
         {/* <button onClick={()=>removeItem(index)}>delet</button> */}
         </form>

         <ul>
           {arr}
          </ul>
     </div>
     );
}

export default Comments
