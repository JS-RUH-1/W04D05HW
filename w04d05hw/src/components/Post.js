import React, { useState } from "react";
import Comment from "./Comment";


const Post = (props) => {
  const [titles_list, setList] = useState([{id:0, title:'Hello',img:"https://ih1.redbubble.net/image.610634649.5557/st,small,507x507-pad,600x600,f8f8f8.jpg"},{id:1, title:'Hello again',img:"https://ih1.redbubble.net/image.610634649.5557/st,small,507x507-pad,600x600,f8f8f8.jpg"}]);
  const [new_title, setTitle] = useState("");
  const [new_image, setImage] = useState("");

  function add() {
    let myListClone = [...titles_list];
    myListClone.push({id:Date.now(),title:new_title,img:new_image});
    setList(myListClone);
  }
  function remove(num){
    let myListClone = [...titles_list];
    switch (myListClone.length) {
        case 1:
        case 0:
            setList([]);
            break;
        default:
            myListClone.splice(num,1);
            setList(myListClone);
            break;
    }
    
  }
  return (
    <div>
    <ul>
      {titles_list.length<1?"":titles_list.map((e,i) => (
        <div className="post" key={e.id}>
        <div className="title_parent"><p></p><p>{e.title}</p> <button className='delete' onClick={()=>(remove(i))}>×</button></div>
        {e.img!=""?<img src={e.img} alt="pic" />:""}
        <Comment id={e.id}></Comment>
        </div>
      ))}
      </ul>
        <div>
        <div id="text_post">
          <label>Write something...</label>
          <input type="text" value={new_title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
          <input
            type="file"
            accept="image/png, image/jpeg" 
            onChange={(e) => setImage(e.target.files[0]==undefined||e.target.files[0]==null||e.target.files[0]==''?"":URL.createObjectURL(e.target.files[0]))}
          />
        </div>
        <div id="post_post">
          <button onClick={add}>POST</button>
        </div>
    </div>
  );
};

export default Post;
