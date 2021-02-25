import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 900;
width: 100%;
height: 100%;
background:#000;
display: grid;
align-items: center;
top:0;
left:0;
transition: 0.2 all ease-out;
opacity: ${({isOpen })=>(isOpen ? '100%': '0')};
top: ${({isOpen}) => (isOpen ? '0':'-100%')};
`

export const CloseIcon = styled(FaTimes)`
color:#fff;
`

export const Icon = styled.div`
position: absolute;
top:1.2rem;
right:1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline:none;

`
export const SidebarWrapper = styled.div`
color:#fff;
`
export const SidebarMenu= styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 60px);
text-align: center;
@media screen and (max-width: 480){
    grid-template-rows: repeat(6, 60px);
}

`

export const SidebarLink= styled(LinkS)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.2rem;
text-decoration: none;
list-style:none;
transition: 0.2 all ease-out;
cursor:pointer;
&:hover {
    color:red;
    transition: 0.2 all ease-in-out;

}

`

export const SidebarBtn= styled.div`
display: flex;
justify-content:center;

`

export const SidebarSignIn= styled(LinkR)`
 border-radius: 5px;
color:#fff;

white-space: nowrap;
padding: 8px 18px;
font-size: 1.2rem;
background: red;
outline:none;
border: none;
text-decoration: none;
transition: 0.2s all ease-in;
&:hover{
    transition: 0.2s all ease-out;
    background: #ca94ad;
    
}
`