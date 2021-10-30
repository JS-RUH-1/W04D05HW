import "../App.css";
import React, { useState } from "react";
import Mycomment from "./comment";
import { Modal, Button } from "react-bootstrap";

function Post() {
  //Modal Trigger to show & hide
  const [modalShow, setModalShow] = useState(false);
  //input title in post modal
  const [addTitle, setAddTitle] = useState("");
  //input image  in post modal
  const [addImage, setAddImage] = useState("");
  //arr to store data
  const [arr, setArr] = useState([
    {
      posTitle: "First post",
      image:
        "https://www.wpbeginner.com/wp-content/uploads/2016/02/showallposts.jpg",
    },
    {
      posTitle: "Second post",
      image:
        "http://emptyeasel.com/wp-content/uploads/2018/08/postaboutyourfavouriteart.jpg",
    },
    {
      posTitle: "Third post",
      image:
        "https://cdn.wedevs.com/uploads/2019/01/How-to-get-more-comments-on-blogs-updated.png",
    },
  ]);
  //Save button clicked in New Post modal
  const handelAdd = () => {
    //check if the inputs empty
    if (addTitle === "" || addImage === "")
      return alert("Please Enter Title && URL");
    //store the current arr in temp array
    let tempArray = [...arr];
    //push the new data  in  temp array
    tempArray.push({ posTitle: addTitle, image: addImage });
    // store teh temp array in the current arr
    setArr(tempArray);
    // hide modal
    setModalShow(false);
    // set input value to empty
    setAddTitle("");
    // set input value to empty
    setAddImage("");
  };

  return (
    <div>
      <h1>Posts Page</h1>

      <Button
        style={{ margin: 20, fontSize: 18 }}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Add Post
      </Button>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="sm"
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
          <br />
          <br />
          <span>URL:</span>{" "}
          <input
            type="text"
            className="modalInput"
            value={addImage}
            onChange={(e) => setAddImage(e.target.value)}
          />
          <br />
          <br />
          <div>
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              name="test"
              onChange={(e) =>
                setAddImage(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>
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
          <div className="mycon" key={index}>
            <img
              src={e.image}
              alt={""}
              width={350}
              height={290}
              style={{ borderRadius: 5 }}
            />
            <h5>{e.posTitle}</h5>
            <Mycomment />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
