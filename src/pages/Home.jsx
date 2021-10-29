import { useState } from "react";

export default function Home() {
    const [draft, setDraft] = useState({});
    const [posts, setPosts] = useState([
        {
            title: "Lion Post",
            image: "https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23-1024x683.jpg",
            comments: []
        },
        {
            title: "Moon Post",
            image: "https://www.designer.io/wp-content/uploads/2019/10/1-1024x698.png",
            comments: []
        },
        {
            title: "blabla",
            image: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
            comments: []
        }
    ])

    const addComment = (post) => {
        let cPosts = [...posts];
        cPosts[post].comments.push(draft[post]);
        setPosts(cPosts);
        setDraft({...draft,[post]: ''})
    }
    const deleteComment = (postIndex, commentIndex) => {
        let cPosts = [...posts];
        cPosts[postIndex].comments = cPosts[postIndex].comments.filter((c, e) => e !== commentIndex);
        setPosts(cPosts);
    }
    return <div className="container posts">

        {posts.map((post, index) =>  <div class="card mt-3">
        <img src={post.image} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
                {post.comments.map((comment, commentIndex) => <p class="card-text">
               <button className="btn btn-danger btn-sm" onClick={() => deleteComment(index, commentIndex)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
               <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
               <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
             </svg></button> {comment}
                </p>)}
            <div class="input-group">
             <input onChange={(e) => setDraft({...draft,[index]: e.target.value})} value={draft[index] || ''} type="text" class="form-control" placeholder="Add comment" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
             <button onClick={() => addComment(index)} class="btn  btn-primary" type="button" id="inputGroupFileAddon04">Submit</button>
            </div>
        </div>
    </div>)}

        </div>;
}