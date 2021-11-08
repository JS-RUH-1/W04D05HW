import {posts} from "./Posts.js";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams,
    useLocation} from "react-router-dom"
function Comments (props){
	
	return (
			<div className="container-fluid bg-light bg-gradient">
				{
					<div className="p-5">
						{
							console.log(this.props.match.params.id)
						}
					</div>
				}
			</div>
		
	);
}

export default Comments;