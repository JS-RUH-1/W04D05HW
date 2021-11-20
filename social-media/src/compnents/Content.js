import {posts} from "./Posts.js";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams,
    useLocation} from "react-router-dom"
function Content (){
	return (
		<div className="container-fluid bg-light bg-gradient">
			{
				<div className="p-5">
					{
						posts.map ( (element,i ) => {
							return (
								<div key={i} class="card col-4 mx-auto mb-5">
									<img src={element.image} class="card-img-top"></img>
									<div class="card-body">
										<p class="card-text">{ element.post }</p>
											<Link to={ `/comments/${i}`} class="btn btn-primary">
												Comments
											</Link>
										</div>
								</div>
							);
						})
					}
				</div>
			}
		</div>
	);
}

export default Content;