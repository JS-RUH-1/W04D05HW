import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../App.css";
import Weather from "./Weather";
export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/posts">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4ZNdZG8MGON1Cq6XwH-d7d6gP8jZfKPDkg&usqp=CAU"
              alt="logo"
              height="40px"
              width="40px"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Posts">Posts</Nav.Link>
            <Nav.Link href="/AboutUs">About us</Nav.Link>
          </Nav>
          <Weather />
        </Container>
      </Navbar>
    </div>
  );
}
