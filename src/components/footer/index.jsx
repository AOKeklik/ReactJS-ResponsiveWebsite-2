import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import Marginer from '../marginer/index'
import Logo from '../logo/index'
import Button from '../button/index'

const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    background-color: #1f1f1f;
`
const MotivationalText = styled.h1`
    margin: 0;
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.4;
`
const AccessibilityContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding-top: 12px;
    padding-right: 10px;
    padding-left: 10px;
    border-top: 1px solid #cdcdcd;
    color: #fff;

    @media screen and (max-width: 480px){
        width: 90%;
        padding-right: 8px;
        padding-left: 8px;
    }
`
const PrivacyContainer = styled.div`
    display: flex;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    cursor: pointer;
    color: #fff;
    font-size: 20px;

    transition: color 200ms ease-in-out;

    @media screen and (max-width: 480px){
        font-size: 14px;
    }

    &:not(:last-of-type){
        margin-right: 11px;

        @media screen and (max-width: 480px){
            margin-right: 9px;
        }
    }

    &:hover{
        color: #adadad;
    }
`
const Link = styled.a`
    cursor: pointer;
    color: #fff;
    font-size: 14px;

    transition: color 200ms ease-in-out;

    @media screen and (max-width: 480px){
        font-size: 12px;
    }

    &:not(:last-of-type){
        margin-right: 11px;

        @media screen and (max-width: 480px){
            margin-right: 9px;
        }
    }

    &:hover{
        color: #adadad;
    }
`
const RightsReserved = styled.div`
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 12px;
`
function Footer() {
    return (
        <FooterContainer>
            <Marginer direction="vertical" margin="5em" />
            <Logo small />
            <Marginer direction="vertical" margin="1em" />
            <MotivationalText>Just say the magical word</MotivationalText>
            <MotivationalText>and we will do the rest</MotivationalText>
            <Marginer direction="vertical" margin="1em" />
            <Button>Start your Project</Button>
            <Marginer direction="vertical" margin="5em" />
            <AccessibilityContainer>
                <PrivacyContainer>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Service</Link>
                    <Link>Contact</Link>
                </PrivacyContainer>
                <SocialContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </SocialIcon>
                </SocialContainer>
            </AccessibilityContainer>
            <RightsReserved>&copy; 2020 Beema All Right Reserved</RightsReserved>
        </FooterContainer>
    )
}

export default Footer
