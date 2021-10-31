import * as Bootstrap from 'react-bootstrap';




function NavBar() {
    return (
      <div>
         <Bootstrap.Navbar bg="dark" variant="dark">
            <Bootstrap.Container>
            <Bootstrap.Navbar.Brand href="/Post">Home</Bootstrap.Navbar.Brand>
            <Bootstrap.Nav className="me-auto">
            <Bootstrap.Nav.Link href="/Post">Post</Bootstrap.Nav.Link>
            <Bootstrap.Nav.Link href="/About">About</Bootstrap.Nav.Link>  
            </Bootstrap.Nav>
            </Bootstrap.Container>
        </Bootstrap.Navbar>
      </div>
    );
}

export default NavBar;