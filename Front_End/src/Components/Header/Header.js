import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import foodheader from './../../images/foodheader.jpg';



function Header(props) {
    return (
        <Jumbotron fluid style={{ backgroundImage: `url(${foodheader})`, backgroundSize: 'cover'}}>
            <Container>
              <h1>{props.title}</h1>
            </Container>
        </Jumbotron>
    )
}
export default Header;