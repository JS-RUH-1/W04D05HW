// import post1 from "./img/post.png";
import { useState } from "react";

let Coments = [];
function Post() {
  let [Coment, setComent] = useState([]);

  let posts = [
    {
      title: "Post 1",
      img: "https://pbs.twimg.com/profile_images/686169789711126528/YlPILqHg_400x400.jpg",
    },
    {
      title: "Post 2",
      img: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      title: "Post 3",
      img: "https://www.teahub.io/photos/full/203-2033095_sun-2048-by-1152-pixels-tall.jpg",
    },
  ];

  function AddComent(e) {
    e.preventDefault();
    let value = e.target[0].value;
    Coments.push(value);
    Coments = [...Coments];
    setComent(Coments);

    console.log(Coments);
  }

  function remove(index) {
    Coments = [...Coments];
    console.log(index);
    // let item = arrayToDo.indexOf(index);
    Coments.splice(index, 1);
    setComent(Coments);
  }

  return (
    <div>
      <p> test</p>

      {posts.map((item) => {
        return (
          <div>
            <img style={{ width: 400 }} src={item.img} />
            <h3>{item.title}</h3>

            <ul>
              {Coments.map((item, index) => {
                console.log(Coments);

                return (
                  <li key={index}>
                    {item} <button onClick={() => remove(index)}>Delete</button>
                  </li>
                );
              })}
            </ul>

            <form onSubmit={AddComent}>
              <label for="w3review">Comment:</label>

              <br></br>

              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>

              <button type="submit">Add</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
