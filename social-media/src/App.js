/* Components imports */
import Content from './compnents/Content';
import Footer from './compnents/Footer';
import Header from './compnents/Header';
import AboutUs from './compnents/AboutUs';
import Comments from './compnents/Comments';

import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams,
    useLocation} from "react-router-dom"
function App() {
	return (
		
		<div> 
			<Header />
			<Router>
			<Routes>

						<Route exact path="/" element={<Content />} />
						<Route exact path="/aboutus" element={<AboutUs />} />
						<Route exact path="/comments/:post" element={<Comments />} />

						</Routes>
						</Router>
			<Footer />
		</div>
	);
}

export default App;
