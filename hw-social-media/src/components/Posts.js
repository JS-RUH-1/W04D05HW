import { useState, useEffect } from "react";
import "../Styles/Posts-module.css";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import logo from "../logo.svg";
import { BiPlusMedical } from "react-icons/bi";
function Posts() {
  const [show, setShow] = useState([]);
  let [postsArr, setPostsArr] = useState([]);

  // FUNCTION TO ADD NEW POST
  let addNewPost = () => {
    let obj = { img: logo, title: "testing22", comments: [] };
    postsArr.push(obj);
    show.push(false);
    setShow((arr) => [...arr]);
    setPostsArr((arr) => [...arr]);
  };
  // FUNCTION TO ADD NEW COMMENT
  let addComment = (e) => {
    e.preventDefault();
    let newComment = document.getElementById("newComment").value;
    document.getElementById("newComment").value = "";
    postsArr[e.target.id].comments.push(newComment);

    setPostsArr((arr) => [...arr]);
  };
  // FUNCTION TO DELETE COMMENT BASED ON ID OF POST(e.target.value) AND ID OF COMMENT(e.target.id)
  let deleteComment = (e) => {
    postsArr[e.target.value].comments.splice(e.target.id, 1);
    setPostsArr((arr) => [...arr]);
  };
  // RETURN
  return (
    <div className="allPosts">
      {postsArr.map((obj, index) => (
        <div className="post">
          <div>
            <p>MAJEEDx99</p>
            <img src={obj.img} alt="" />
            <h6 className="title">
              {" "}
              <b>MAJEEDx99</b> {obj.title}
            </h6>
          </div>
          <div className="showComments">
            <a
              id={index}
              onClick={(e) => {
                let index = e.target.id;
                show.splice(index, 1, true);
                setShow((arr) => [...arr]);
              }}
            >
              view all {obj.comments.length} comments
            </a>
          </div>

          <Modal
            show={show[index]}
            id={index}
            onHide={() => {
              show.splice(index, 1, false);
              setShow((arr) => [...arr]);
            }}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Comments
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {obj.comments.map((comment, indexOfComment) => (
                <div className="eachComment">
                  <h6>Unknown User: </h6>
                  <div>{comment}</div>
                  <button
                    onClick={deleteComment}
                    value={index}
                    id={indexOfComment}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <form>
                <input
                  id="newComment"
                  className="addComment"
                  type="text"
                  placeholder="Add a comment"
                  className="postCommentText"
                ></input>
                <button
                  className="postCommentBtn"
                  id={index}
                  type="submit"
                  onClick={addComment}
                >
                  Post
                </button>
              </form>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
      <button className="addPostBtn" onClick={addNewPost}>
        <BiPlusMedical color="rgb(17, 105, 139)" />
      </button>
    </div>
  );
}
export default Posts;
