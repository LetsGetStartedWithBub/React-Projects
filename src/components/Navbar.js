import {React, useState, useEffect} from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

export const NavBar = () => {
  const[activeLink, setActiveLink] = useState('home');
  const[scrolled, setScrolled] = useState(false);
  useEffect(() =>{
    const onScroll = () => {
        if (window.scrollY > 50){
          setScrolled(true);
        }else{
          setScrolled(false);
        }
    }

    window.addEventListener("scroll", onscroll);
    return(window.removeEventListener("scroll", onscroll));
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar bg="light" expand="lg" className = {scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={"logo"} alt = "logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Youtube</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Behance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Linkedin</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
