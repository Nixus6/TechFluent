import React from 'react'
import logo from './img/ICB.png';
import { Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';

export default class navbar extends React.Component {
    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top"
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
                if (this.state.status !== "amir") {
                    this.setState({ status: "amir" });
                }
            } else {
                if (this.state.status !== "top") {
                    this.setState({ status: "top" });
                }
            }
        });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render() {
        return (
            <>
                <Navbar bg={this.state.status === "top" ? "" : "light"}
                    expand="lg" fixed="top" >
                    <Container>
                        <img
                            className="LogoCB"
                            src={logo}
                            width="100"
                            margin-right="2rem"
                        />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="">Cajas Organizadoras</NavDropdown.Item>
                                    <NavDropdown.Item href="">Baldes y Contenedores</NavDropdown.Item>
                                    <NavDropdown.Item href="">Organizadores</NavDropdown.Item>
                                    <NavDropdown.Item href="">Papeleras</NavDropdown.Item>
                                    <NavDropdown.Item href="">Mesa y Cocina</NavDropdown.Item>
                                    <NavDropdown.Item href="">Portacomidas</NavDropdown.Item>
                                    <NavDropdown.Item href="">Mascotas</NavDropdown.Item>
                                    <NavDropdown.Item href="">Limpieza y Aseo</NavDropdown.Item>
                                    <NavDropdown.Item href="">Jugueteria</NavDropdown.Item>
                                    <NavDropdown.Item href="">Jardineria</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/about" id={this.state.status === "top" ? "NavLinkTop" : "NavLinkDown"} >Acerca De</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link>

                                </Nav.Link>
                                <Nav.Link>

                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        )
    }

}