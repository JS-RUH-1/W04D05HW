import "../App.css";
import React, { useEffect, useState } from "react";
import Mycomment from "./comment";
import { Modal, Button } from "react-bootstrap";

function Post() {
  const [modalShow, setModalShow] = useState(false);

  const [addImage, setAddImage] = useState("");
  const [addTitle, setAddTitle] = useState("");

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

  const handelAdd = () => {
    let tempArray = [...arr];
    tempArray.push({ posTitle: addTitle, image: addImage });
    setArr(tempArray);
    setModalShow(false);
    console.log(tempArray);
  };

  return (
    <div>
      <h1>Posts Page</h1>

      <Button
        style={{ margin: 30 }}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Add Post
      </Button>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Title:</span>{" "}
          <input
            type="text"
            className="modalInput"
            value={addTitle}
            onChange={(e) => setAddTitle(e.target.value)}
          />
          <span>URL::</span>{" "}
          <input
            type="text"
            className="modalInput"
            value={addImage}
            onChange={(e) => setAddImage(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setModalShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handelAdd()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

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
            <Mycomment />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
