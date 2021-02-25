import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer= styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index:1;

`
export const HeroBackground= styled.div`
position:absolute;
top:0;
right:0;
bottom: 0;
left:0;
width:100%;
height:100%;
overflow: hidden;

`
export const VideoBg= styled.video`
width:100%;
height:100%;
-o-object-fit: cover;
object-fit: cover;
background: #000;
`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position:absolute;
padding:8px 16px;
display: flex;
flex-direction: column;
align-items:center;

`

export const Heromain = styled.h1`
color:#fff;
font-size:3rem;
@media screen and (max-width: 768px){
    font-size:2rem;  
}
@media screen and (max-width: 480px){
    font-size:1.6rem;  
}

`

export const HeroText = styled.p `
color:#fff;
font-size:2rem;
margin-top:1rem;
max-width: 600px;
@media screen and (max-width: 768px){
    font-size:1.6rem;  
}
@media screen and (max-width: 480px){
    font-size:1rem;  
}
`

export const HeroBtn= styled.div `
margin-top:2rem;
display:flex;
flex-direction: column;
align-items:center;
`

export const ArrowForward= styled(MdArrowForward)`
margin-left:0.7rem;
font-size: 2rem;
`
export const ArrowRight= styled(MdKeyboardArrowRight)`
margin-left:0.7rem;
font-size: 2rem;
`