import React from 'react'
import styled from 'styled-components'
import {Element} from 'react-scroll'

import SectionTitle from '../../components/sectionTitle/index'
import Url from '../../assets/illustrations/rocket_launch_.png'

const MoreAboutContainer = styled(Element)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500px;
    padding: 0 1em;
    
`
const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;

    @media screen and (max-width: 480px){
        flex-direction: column-reverse;
        max-width: 100%;
    }
`
const AboutText = styled.p`
    color: #2f2f2f;
    font-size: 21px;
    font-weight: normal;
    line-height: 1.4;
`
const AboutImg = styled.img`
    width: 600px;
    height: 500px;
    margin-left: 2em;

    @media screen and (max-width: 480px){
        width: 370px;
        height: 290px;
        margin-left: 0
    }
`

function moreAboutSection() {
    return (
        <MoreAboutContainer>
            <SectionTitle>More About Beema</SectionTitle>
            <AboutContainer>
                <AboutText>
                Beema is about designing, building and deliverying best quality
                software for your company. {<br />}
                {<br />} We make sure that you get the best software inferstracture
                and set of applications to ensure the best experience of your clients.{" "}
                {<br />}
                {<br />} So wether you are handling thousands of payment transactions
                or you’re just starting out, you are in the right place.
                </AboutText>
                <AboutImg src={Url} />
            </AboutContainer>
        </MoreAboutContainer>
    )
}

export default moreAboutSection