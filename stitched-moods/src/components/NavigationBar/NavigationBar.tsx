import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function NavigationBar(){

    return (
      <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Stitched Moods</Navbar.Brand>
          <Nav className='links'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#patternDesigner">Pattern Designer</Nav.Link>
            <Nav.Link href="#designLibrary">Design Library</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <style>
        {`.links{
          color: "white";
        `}
      </style>
      </>
    )
}


export default NavigationBar;