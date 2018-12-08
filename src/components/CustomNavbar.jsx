import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormControl, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className="navbar-style">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">SteDylan</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <Row>
                            <Col xs={9}>
                                <FormControl type="text" placeholder="Search" />
                            </Col>
                            <Col xs={3}>
                                <Button type="submit" bsStyle="success">Submit</Button>
                            </Col>
                        </Row>
                    </Navbar.Form>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/">
                            主页
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/">
                            关于
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/">
                            其他
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}
