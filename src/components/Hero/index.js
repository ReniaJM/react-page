import React, {useState} from 'react'
import {HeroContainer, HeroBackground, VideoBg, HeroContent, Heromain, HeroText, HeroBtn, ArrowForward, ArrowRight} from './HeroElements'
import Video from '../../video/hero.mp4';
import Button from '../ButtonElement';


const Hero = () => {

    const [hoverArrow, sethoverArrow]= useState(false);

    const onhover=()=>{
        sethoverArrow(!hoverArrow)
    }

    return (
        <>
        <HeroContainer>
            <HeroBackground>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBackground>
            <HeroContent>
                <Heromain>
                    sdjfbjsdbfjsdbfjs
                </Heromain>
                <HeroText>
                dfnvkjdfnkndfknkdfjnkdjfnkjdfngkjdnf
                </HeroText>
                <HeroBtn>
                    <Button 
                    to="/signup" 
                    onMouseEnter={onhover} 
                    onMouseLeave={onhover} 
                
                     
                     >
Sign up {hoverArrow ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtn>
      
    
            </HeroContent>
        </HeroContainer>
            
        </>
    )
}

export default Hero
