import React from "react";
import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';

function Header() {
  return (
    <Container className="themed-container" fuild={true}>
      <Row>
        <Col xs="6">ANIMALS</Col>
        <Col xs="6">
          <ul className="header-content">
            <li className="header-content__li">Dog</li>
            <li className="header-content__li">Cat</li>
            <li className="header-content__li">Animals</li>
            <li></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

Header.propTypes = {};

export default Header;
