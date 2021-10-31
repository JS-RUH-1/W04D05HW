import { React,useState} from 'react';
import * as Bootstrap from 'react-bootstrap';

function Comments() {

    let [Comments, setComments] = useState([]);
    
  
    function AddComment(e) {
      e.preventDefault()
        console.log(e.target.parentElement.children[0].value)
      let CommentArray = Comments.slice();
      CommentArray.push(e.target.parentElement.children[0].value);
      setComments(CommentArray);
      console.log(CommentArray);
    }
  
    function Delete(key) {
      let CommentArray = Comments.slice();
      CommentArray.splice(key,1)
      setComments(CommentArray);
      console.log(CommentArray);

    }
  
    return (
      <div>
        <input type="text"></input>
        <Bootstrap.Button  onClick={(e) =>AddComment(e)} variant="secondary" className="mx-2">Add Comment</Bootstrap.Button>
  
        <ul style={{ listStyleType: "none" }}>
          {Comments.map(function (element, key) {
            if (element) {
              return (
                <div>
                  <li key={key}>{element}</li>
                  <Bootstrap.Button variant="secondary" onClick={(e) => Delete(key)}>Delete</Bootstrap.Button>
                </div>
              );
            }
          })}
        </ul>
      </div>
    );
  }

  export default Comments;