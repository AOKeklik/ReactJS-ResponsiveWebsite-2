import React from 'react'
import styled from 'styled-components/macro'

const ServiceContainer = styled.div`
    display: flex;
    flex-direction: ${({isReversed}) => isReversed && 'row-reverse'};
    align-items: center;
    flex-wrap: wrap-reverse;
    margin-bottom: 4em;

    @media screen and (max-width: 480px){
        justify-content: center;
    }
`
const ServiceImg = styled.img`
    width: 22em;
    height: 17em;

    @media screen and (max-width: 480px){
        width: 18em;
        height: 17em;
    }
`
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;

    @media screen and (max-width: 480px){
        max-width: 100%;
    }
`
const Title = styled.h2`
    color: #000;
    font-size: 28px;
    font-weight: 700;
    margin: 5px 0;

    @media screen and (max-width: 480px){
        margin-top: 1.5em;
    }
`
const Details = styled.p`
    max-width: 55%;
    color: #7a7a7a;
    font-size: 21px;
    text-align: center;

    @media screen and (max-width: 480px){
        width: 100%;
    }
`

function OurServices(props) {
    const {url, title, description, isReversed} = props

    return (
        <ServiceContainer isReversed={isReversed}>
            <DescriptionContainer>
                <Title>{title}</Title>
                <Details>{description}</Details>
            </DescriptionContainer>
            <ServiceImg src={url} />
        </ServiceContainer>
    )
}

export default OurServices
