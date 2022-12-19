import {React, useState, useEffect} from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import '../static/styles/Navbar.css';
import home from '../static/images/home.png';

function NavBar() {
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
          <img src={home} alt = "logo" />
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;