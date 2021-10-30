import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function Mycomment() {
  //Modal Trigger to show & hide
  const [modalShow, setModalShow] = useState(false);

  //Input  Comment box value
  const [add, setAdd] = useState("");
  //Input Edit box value in edit Modal
  const [editValue, setEditValue] = useState("");

  //Index of edited comment
  const [myindex, setIndex] = useState();

  // Comments List
  const [value, setValue] = useState([]);

  //Add func
  const addComment = () => {
    //check if input is empty
    if (add === "") return;
    // create temp array
    let tempArr = [...value];
    //get add value and push it in temp array
    tempArr.push(add);
    // store  the temp array into Comments List
    setValue(tempArr);
    //Make the text  input empty
    setAdd("");
  };
  //Delete Func
  const handelDelete = (index) => {
    // creare Temp arr and store the current value
    let tempArr = [...value];
    // delete the clicked item from the temp Arr
    tempArr.splice(index, 1);
    // store  the temp array into Comments List
    setValue(tempArr);
  };
  //Edit Comment btn clicked
  const handelEditOpen = (index) => {
    // Show edit modal
    setModalShow(true);
    //copy the current comments
    let tempArr = [...value];
    //set the text of edit input to the clicked comment
    setEditValue(tempArr[index]);
    //store index to use it in save func
    setIndex(index);
  };
  //Save Btn in edit modal clicked
  const handelEditSave = () => {
    //check if the input is empty
    if (editValue === "") return;
    //copy the current comments to temp array
    let tempArr = [...value];
    //edit the temp array
    tempArr[myindex] = editValue;
    //change the current list to temp array
    setValue(tempArr);
    //hide modal
    setModalShow(false);
  };

  return (
    <div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Comment: </span>
          <input
            type="text"
            className="modalInput"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setModalShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handelEditSave()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <hr />
      <input
        className="input2"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
        type="text"
        placeholder="Type a comment ..."
      />
      <Button
        variant="secondary"
        style={{ marginLeft: 20, fontSize: 15 }}
        onClick={() => addComment()}
      >
        Post
      </Button>

      <hr />
      <ul>
        {value.map((e, index) => (
          <div style={{ display: "grid", gridTemplateColumns: "200px 100px" }}>
            <li
              style={{
                listStyleType: "none",
                textAlign: "left",
                fontSize: 15,
                padding: 10,
                fontWeight: "bold",
              }}
            >
              {e}
            </li>
            <div>
              <Button
                variant="danger"
                style={{ marginRight: 15 }}
                onClick={() => handelDelete(index)}
              >
                <FontAwesomeIcon size="md" icon={faTrash} />
              </Button>
              <Button variant="warning" onClick={() => handelEditOpen(index)}>
                <FontAwesomeIcon size="md" icon={faEdit} />
              </Button>
              <hr />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Mycomment;
