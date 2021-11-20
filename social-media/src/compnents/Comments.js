import {posts} from "./Posts.js";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams,
    useLocation} from "react-router-dom"
import { useRef, useState } from "react";
function Comments (props){
	const commentInput = useRef();
	const {post} = useParams();
	const [deletedComment, setDeletedComment] = useState(-1)
	const [addedComment, setAddedComment] = useState(-1)

	function deleteComment ( id ){
		delete posts[post].comments[id];
		setDeletedComment ( id );
	}

	function addNewComment (){
		let commentsArray = posts[post].comments;
		if ( commentInput.current.value != "" ){
			commentsArray[commentsArray.length + 1 ] = commentInput.current.value;
			setAddedComment ( commentsArray.length + 1 );
		}
	}
	return (
			<div className="container-fluid bg-light bg-gradient">
				{
					<div className="p-5 pe-5 col-5 mx-auto">
						<h3>Comments</h3>
						<br></br>
						<ul class="list-group">
						{
							posts[post].comments.map ((comment, index) => {
								return (
									<li class="list-group-item">{comment} <i class="bi bi-trash float-end" onClick={() => deleteComment(index)}></i></li>
								)
							})
						}
						</ul>
					</div>
				}
				<div className="col-5 mx-auto">
					<hr></hr>
					
					<div class="mb-3">
						<label for="commentTextArea" class="form-label">Your comment</label>
						<textarea ref={commentInput} class="form-control" id="commentTextArea" rows="3"></textarea>
					</div>
					<div class="col-auto">
						<button type="submit" class="btn btn-primary mb-3" onClick={() => addNewComment()}>Send</button>
					</div>
				</div>
			</div>
		
	);
}

export default Comments;