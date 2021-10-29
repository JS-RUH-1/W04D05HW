import React, { useState } from "react";

function Mycomment() {
  //Input box value
  const [add, setAdd] = useState("");
  // Comments List
  const [value, setValue] = useState([]);

  //Add func
  const addComment = () => {
    //check if input is empty
    if (add == "") return;

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

  return (
    <div>
      <hr />
      <input
        value={add}
        onChange={(e) => setAdd(e.target.value)}
        style={{ width: 260, marginBottom: 2, height: 20 }}
        type="text"
        placeholder="Type a comment ..."
      />
      <button style={{ marginLeft: 20 }} onClick={() => addComment()}>
        Post
      </button>
      <hr />
      <ul>
        {value.map((e, index) => (
          <div style={{ display: "grid", gridTemplateColumns: "220px 40px" }}>
            <li
              style={{
                listStyleType: "none",
                textAlign: "left",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              {e}
            </li>
            <div>
              <button onClick={() => handelDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Mycomment;
