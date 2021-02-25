import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarBtn, SidebarSignIn, SidebarMenu } from './sideElements'


const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer onClick={toggle} isOpen={isOpen}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="about">About</SidebarLink>
                    <SidebarLink onClick={toggle}  to="projects">Projects</SidebarLink>
                    <SidebarLink onClick={toggle} to="bio">BIO</SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarSignIn to="/signin">Sign In</SidebarSignIn>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar;
