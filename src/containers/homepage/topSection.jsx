import React from 'react'
import styled from 'styled-components'
import {Element, scroller} from 'react-scroll'

import BackgroundImg from '../../assets/pictures/company_team.jpg'
import Logo from '../../components/logo/index'
import Navbar from '../../components/navbar/index'
import Marginer from '../../components/marginer/index'
import Button from '../../components/button/index'
import DownArrow from '../../components/downArrow/index'

const TopContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
`
const BackgroundFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(55,55,55,.89);
`
const MotivationalText = styled.h1`
    margin: 0;
    color: #FFF;
    font-weight: 500;
    font-size: 34px;
    line-height: 1.4;
    text-align: center;
`
const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
`

function TopSection(){
    const scrollToNextSection = () => {
        scroller.scrollTo('servicesSection', {smooth: true, duration: 1500})
    }

    return (
        <Element name="topSection">
            <TopContainer>
                <BackgroundFilter> 
                    <Navbar />
                    <Marginer direction="vertical" margin="8em" />
                    <Logo /> 
                    <Marginer direction="vertical" margin="4em" />
                    <MotivationalText>Software Development</MotivationalText>
                    <MotivationalText>From the Best in the Industry</MotivationalText>
                    <Marginer direction="vertical" margin="2em" />
                    <Button>Start your Project</Button>
                    <DownArrowContainer onClick={scrollToNextSection}> <DownArrow /> </DownArrowContainer>
                </BackgroundFilter>
            </TopContainer>
        </Element>
    )
} 

export default TopSection
