import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

export default function Comment() {
  const [comments, setcomments] = useState([]);
  const [newComment, setnewComment] = useState("");
  function hundleDelete(index) {
    let temp = [...comments];
    temp.splice(index, 1);
    setcomments(temp);
  }
  function hundleAdd() {
    if (newComment === "") return;
    else setcomments([...comments, newComment]);
  }

  return (
    <>
      <div className="Comments">
        {comments.map((comment, index) => {
          return (
            <div comment>
              <p>
                {comment}
                <Button
                  variant="danger"
                  onClick={() => {
                    hundleDelete(index);
                  }}
                >
                  delete
                </Button>
              </p>
            </div>
          );
        })}
      </div>
      <div className="textAreacss">
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comment"
          className="m-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            onChange={(e) => setnewComment(e.target.value)}
          />
        </FloatingLabel>
        <p>
          <Button
            onClick={() => hundleAdd()}
            variant="primary"
            size="lg"
            type="submit"
          >
            Add Comment
          </Button>
        </p>
      </div>
    </>
  );
}
