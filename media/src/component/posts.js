import React, {useState} from "react";
// import Comments from "./comments";

const Post =  (props) => {

    const [showBTN, setShowBTN] = useState(false)
    const [allComments, setAllComments] = useState([])
    const [commentCount, setCommentCount] = useState(1)
    const [comment, setComment] = useState("")
    const [displayComments, setDisplayComments] = useState(false)


    const ColoredLine = () => (
        <hr
            style={{
                width: "93%",
                marginBottom: "5px" 
            }}
        />
    );

    const addComment = () => {
        if(comment === '') {
            return null
        } else {
            const newComment = {
                id: commentCount,
                comment: comment 
            }
            setCommentCount(commentCount + 1)
            setAllComments(allComments.concat(newComment))
            setDisplayComments(true)
            setComment("")
        }

    }


    const deleteComment = (id) => {
        let x = allComments.filter((comment) => comment.id !== id)
        setAllComments(x)
    }


    return ( 
        <div className="postContainer">
            <div className="post">
                <img src={props.post.image} width="450" height="300" alt=""/>
                <p>{props.post.title}</p>
                <ColoredLine />
                <div className="addComments">
                    <input 
                        className="InputComment" 
                        type="text" name='comment' 
                        placeholder="add comment..." 
                        onKeyUp={() => setShowBTN(true)}
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    />
                    {showBTN && (
                        <button onClick={addComment}>Add Comment</button>
                    )}
                </div>



                {displayComments && (
                    <div className="comments">
                        <div>
                            {allComments.map((ele, index) => (
                                <div className="singleComment" key={index}>
                                    <div>{ele.comment}</div>
                                    <i className="far fa-trash-alt" onClick={() => deleteComment(ele.id)}></i>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
     );
}

export default Post;