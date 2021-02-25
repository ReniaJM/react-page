import styled from 'styled-components'
import {Link } from 'react-scroll';

const Button = styled(Link)`
border-radius:5px;
background: ${({primary}) => (primary ? 'blue' :'brown')};
white-space: nowrap;
padding: ${({big})=>(big ? '14px 30px'  :'12px 15px')};
color: ${({dark})=> dark ? '#009' : '#ff5'};
font-size: ${({fontBig})=> fontBig ? "20px" :'15px'};
outline:none;
border:none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: 0.2 s all ease-in;

&:hover {
    transition: 0.2 s all ease-in-out;
    background: ${({primary})=> primary ? "#fff" : "#000" }
}

`

export default Button;