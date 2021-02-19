import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, Menu, MenuItems, MenuLinks, NavContact, ContactLinks } from './navElements'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">logo</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <Menu>
                    <MenuItems>
                        <MenuLinks to="about">About</MenuLinks >
                    </MenuItems>
                    <MenuItems>
                        <MenuLinks to="projects">Projects</MenuLinks >
                    </MenuItems>
                    <MenuItems>
                        <MenuLinks to="pio">BIO</MenuLinks >
                    </MenuItems>
                </Menu>
                <NavContact>
                    <ContactLinks to="contact">Contact</ContactLinks>
                </NavContact>


            </NavbarContainer>
        </Nav>
      
        </>
    )
}

export default Navbar
