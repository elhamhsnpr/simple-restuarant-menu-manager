import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import foodheader from './../../images/foodheader.png';
import Navbar from 'react-bootstrap/Navbar'


function Header() {
    return (




        
        <Jumbotron >
            <Container>
            <Image src= {foodheader} fluid />
            </Container>
        </Jumbotron>

        // <nav className="navbar navbar-dark bg-primary">
        //     <div className="row col-12 d-flex justify-content-center text-white">
        //     <span className="h3">Menu</span>
        //     </div>
        // </nav>
    )
}
export default Header;