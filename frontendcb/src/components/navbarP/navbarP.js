import React from 'react'
import { Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';

export default class navbarP extends React.Component {


    render() {
        return (
            <>

                <Navbar>
                    <Nav className="ml-auto">
                        <div class="dropdown show">
                            <a class="nav-link" href="#pablo" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img id="photo" src="<?= URL_IMG ?>man-1.png" alt="Logo del Area" />
                                <p class="d-lg-none d-md-block">
                                    Account
                    </p>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownProfile">
                                <a id="cerrar" class="dropdown-item" href="<?php echo $functions->encryptation($_SESSION['id']); ?>">
                                    <i class="fas fa-sign-out-alt"> </i>
                                    <p>
                                        <span>Salir</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </Nav>
                </Navbar>

            </>
        )
    }

}