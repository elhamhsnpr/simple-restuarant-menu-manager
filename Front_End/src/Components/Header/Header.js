import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import foodheader from './../../images/foodheader.jpg';



function Header() {
    return (
        <Jumbotron fluid style={{ backgroundImage: `url(${foodheader})`, backgroundSize: 'cover'}}>
            <Container>
              <h1>Food Menu</h1>
            </Container>
        </Jumbotron>
    )
}
export default Header;