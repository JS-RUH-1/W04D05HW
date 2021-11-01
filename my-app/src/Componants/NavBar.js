import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import PostsComponents from './PostsComponents';
import AboutUs from './AboutUs';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function NavBar() {
	return (
		<Router>
			
				<Navbar bg="dark" variant="dark" >
					<Container className="none1">
						<Navbar.Brand >
							
							<Link to="/">Logo</Link>
						</Navbar.Brand>
						<Nav className="me-auto">
							
								
							
                                <Nav.Link>
								
								<Link exact to="/">Posts-components</Link>
							</Nav.Link>
							<Nav.Link>
								
								<Link to="/AboutUs">AboutUs</Link>
							</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			

			<Switch>
				<Route exact path="/">
					<PostsComponents />
				</Route>
				<Route path="/Aboutus">
					<AboutUs />
				</Route>
			</Switch>
		</Router>
	);
}
export default NavBar;
