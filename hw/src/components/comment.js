import React, { useState } from "react";

function Mycomment() {
  const [add, setAdd] = useState("");
  const [value, setValue] = useState([]);

  const addComment = () => {
    if (add == "") return;

    let tempArr = [...value];
    tempArr.push(add);
    setValue(tempArr);
    setAdd("");
  };

  const handelDelete = (index) => {
    let tempArr = [...value];
    tempArr.splice(index, 1);
    setValue(tempArr);
  };

  return (
    <div>
      <hr />
      <input
        value={add}
        onChange={(e) => setAdd(e.target.value)}
        style={{ width: 220, marginBottom: 10, height: 20 }}
        type="text"
        placeholder="Type a comment ..."
      />
      <button style={{ marginLeft: 20 }} onClick={() => addComment()}>
        Post
      </button>
      <hr />
      <ul>
        {value.map((e, index) => (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <li style={{ listStyleType: "none", textAlign: "left" }}>{e}</li>
            <button onClick={() => handelDelete(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Mycomment;
