import {useState} from 'react';

let postList = [
    {title: "First post", img: "./andrej-lisakov-fGZ2x8wFxC0-unsplash.jpg", text: "Some text here...", comments:["comment1", "comment2"]},
    {title: "Second post", img: "./andrej-lisakov-fGZ2x8wFxC0-unsplash.jpg", text: "Some text here...", comments:["comment1", "comment2"]},
    {title: "Third post", img: "./andrej-lisakov-fGZ2x8wFxC0-unsplash.jpg", text: "Some text here...", comments:["comment1", "comment2"]},
    {title: "Forth post", img: "./andrej-lisakov-fGZ2x8wFxC0-unsplash.jpg", text: "Some text here...", comments:["comment1", "comment2"]},
    {title: "Fifth post", img: "./andrej-lisakov-fGZ2x8wFxC0-unsplash.jpg", text: "Some text here...", comments:["comment1", "comment2"]},    
]

export function Posts() {
    const[post, setPost] = useState(postList);
    const[state, setState] = useState([""]);
    const[state2, setState2] = useState([0]);
    const[state3, setState3] = useState("");

    function showPost(index) {
        let post = postList[index]
        setState([{
            title: post.title,
            img: post.img,
            text: post.text,
            comments: post.comments
        }, index])
        
    }
    
    function addComment(){
        let curr_post = state[0]
        curr_post.comments.push(state3)
        setState([curr_post])
        console.log(state)
    }

    function removeComment(item) {
        let curr_post = state[0];
        let new_comnt_list =[] 
        curr_post.comments.forEach((i)=>{
            if(i != item) {new_comnt_list.push(i)}
        })
        curr_post.comments = new_comnt_list
        setState([curr_post]);
        let new_posts = post
        new_posts[state[1]] = state[0];
        setPost(new_posts)
        console.log(post)
    }


    if(state[0] == false){
        return (
            <div className="container mt-5 mb-3">
                <div className="row row-cols-1 row-cols-md-4 g-3">
                    {
                        post.map((i, index) => {
                            return(
                                <div key={index} className="col">
                                    <div className="card">
                                        <img src={i.img} alt={i.title} className="card-img-top"/>
                                        <div className="card-body">
                                            <div className="card-title fw-bold"><i>{i.title}</i></div>
                                            <div className="card-text">{i.text}</div>
                                            <div className="card-text mt-3">
                                                <span>Comments: </span>
                                                {
                                                    <button className="btn btn-link rounded-pill badge" style={{backgroundColor: "#33cccc"}}
                                                    onClick={()=>{showPost(index)}}>
                                                        {i.comments.length}
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }   
                </div>
            </div>
        )
    }else{
        return(
            <div className="container mt-3" id="rc" >
            <button className="btn btn-link text-decoration-none" onClick={() => {setState([""])}}>Back to posts</button>
                <div className="card">
                    <img src={state[0].img} alt={state[0].title} className="card-img-top"/>
                    <div className="card-body">
                        <div className="card-title"><i>{state[0].title}</i></div>
                        <div className="card-text mb-3">{state[0].text}</div>
                        <p>Comments:</p>
                        <div className="card-text ms-0">
                            {
                                (state[0].comments).map((i,index) => {
                                    if(i){
                                        return (
                                        <div key={index} className="card mt-2">
                                            <div className="card-body py-1">
                                                <div className="row d-flex justify-content-between">
                                                    <div className="col-8">
                                                        <p style={{listStyleType: "none"}}># {i}</p>
                                                    </div>
                                                    <div className="col-2">
                                                        <button className="btn btn-light text-danger py-0"
                                                        onClick={()=>{removeComment(i)}}>X</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    }
                                })
                            }
                        </div>
                        {
                            state2.map((i, index) => {
                                if(i == 0){
                                    return (
                                        <button className="btn btn-sm btn-success mt-2" onClick={()=>{setState2([1])}}>Add comment</button>
                                    )
                                }else{
                                    return(
                                        <div className="mt-3">
                                            <textarea className="form-control" onChange={(e)=>{setState3(e.target.value)}}/>
                                            <button className="btn btn-warning mt-2" onClick={()=>{addComment()}}>Send</button>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    
}