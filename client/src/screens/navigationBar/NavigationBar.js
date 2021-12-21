import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './navigation.css'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationLinks'
import logo from '../../images/logo.PNG'

function createLinks() {
    return navigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function navigationBar() {
    return (
        <div id="home">
            <Navbar className='navigation_container'
                style={{ zIndex: '2', position: 'fixed', top: '0', width: '100%', opacity: '1' }}
                collapseOnSelect
                expand='md'>
                <Navbar.Brand href="#home" ><img className='logo' src={logo} alt='LOGO icon' />Prince Asilo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '4rem', borderColor: 'none' }}>
                    <Nav className='links' style={{ margin: '0 1ewm' }}>
                        {createLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default navigationBar

//npx browserslist@latest --update-db