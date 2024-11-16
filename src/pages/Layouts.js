import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Layout() {
  return (
    
<>
<Navbar  bg="light" data-bs-theme="light">

<Container>

<Navbar.Brand href="/">Navbar</Navbar.Brand>

          
<Nav className="me-auto">
            <Nav.Link href="/">Publikus Tartalom</Nav.Link>
            <Nav.Link href="/admin">Admin felület</Nav.Link>
            
            
                
        </Nav>
      </Container>
    </Navbar>


      {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
      <Outlet />

      

</>
    
  );
}

export default Layout;