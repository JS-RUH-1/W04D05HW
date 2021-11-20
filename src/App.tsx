import './App.css';
import {NavBar} from './componant/nav';
import { Commnets } from "./componant/commnets";
import {PostComment} from "./componant/postComment";
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import { Post } from './componant/posts';
import {  useState } from 'react';


let allPosts = [
  {Images:"https://source.unsplash.com/random/1",Title:"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",comments:[]},
  {Images:"https://source.unsplash.com/random/2",Title:"The way to get started is to quit talking and begin doing. -Walt Disney",comments:[]},
  {Images:"https://source.unsplash.com/random/3",Title:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",comments:["asdf1","asdf2","asdf3",]},
  {Images:"https://source.unsplash.com/random/4",Title:"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",comments:[]},
  {Images:"https://source.unsplash.com/random/5",Title:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",comments:[]},
  {Images:"https://source.unsplash.com/random/6",Title:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",comments:[]},
]
//test

function App() {

  const [posts,setPosts] = useState(allPosts);

  const [commnet,setComment] = useState("");



const  addComment = (event:any)=>{
  if(commnet !== "")
  posts[event.target.value].comments.push(commnet);
  setComment("");

}



const changeHandler = (event:any)=>{

  setComment(event.target.value);

}




const deleteComment=(event:any)=>{

  var index = allPosts[event.target.value].comments.indexOf(event.target.id);

  console.log(index)
  if (index > -1) {
    posts[event.target.value].comments.splice(index, 1);
  }

  setPosts(allPosts)

}

  return (
    <Router>
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <Switch>
          <Route exact path="/">
      {posts.map((e,i)=> <>
      <Post key={i+Math.random()} title={e.Title} img={e.Images}/>
      {e.comments.length === 0 ?<> <h1>No Comments</h1> <PostComment action={posts} index={i} change={changeHandler} text={commnet}  /></>:
      <><h1>commnets:</h1> <PostComment action={addComment} change={changeHandler}  index={i}/> </>}
      <br/>
      {e.comments.map((val,id)=> <Commnets key={i+Math.random()} index={i} id={val}  value={val} delete={deleteComment}/>)}
      </>
      )}
        </Route>
        <Route exact path="/about-us">
              <h1>We Are Venom</h1>
          </Route>
          
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;

