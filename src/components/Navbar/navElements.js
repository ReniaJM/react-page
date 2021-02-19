import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
background: #000;
height:80px;
/* margin-top:-80px; */
display:flex;
justify-content:center;
align-items:center;
font-size: 1.2rem;
position: sticky;
top:0;
z-index:10;
@media screen and (max-width: 960){
    transition: 0.8s all ease
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content:space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100;

`;

export const NavLogo = styled(LinkR)`
color:#fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.2rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;

`;

export const MobileIcon= styled.div`
/* display: none; */

@media screen and (max-width: 768px){
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
    color:#fff;
}

`;

export const Menu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: 22px;

@media screen and (max-width: 768px){
    display: none;
}

`;

export const MenuItems = styled.li`
height: 50px;

`;

export const MenuLinks = styled(LinkS)`
color:#fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 24px;
height: 100%;
cursor: pointer;

&::active{
border-bottom: 3px solid #fff;
}

`;

export const NavContact = styled.nav`
display: flex;
align-items: center;
color:#fff;
@media screen and (max-width: 768px){
    display: none;
}

`;

export const ContactLinks = styled(LinkR)`
border-radius: 5px;
color:#000;
white-space: nowrap;
padding: 8px 18px;
font-size: 1.2rem;
background: linear-gradient(90deg, rgba(79,21,73,1) 47%, rgba(253,213,79,1) 97%);
outline:none;
border: none;
text-decoration: none;
transition: 0.5s all ease-in;
&:hover{
    transition: 0.5s all ease-out;
    background: #ca94ad;
    
}

`;