import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'

import Marginer from '../marginer/index'

const CardContainer = styled.div`
    position: relative;
    width: 350px;
    height: 430px;
    padding: 10px 1.2em;
    margin: 5px 0;
    border-radius: 3px;
    box-shadow: 0 0 7px rgba(17,17,17,.2);
    background-color: #fff;
`
const QuoteIcon = styled.div`
    position: absolute;
    top: 13px;
    left: 17px;
    color: #d1d1d1;
    font-size: 37px;
`
const ReviewText = styled.p`
    display: flex;
    justify-content: center;
    color: #585858;
    font-size: 17px; 
    font-weight:normal;
`
const Line = styled.div`
    display: flex;
    min-width: 100%;
    min-height: 1px;
    margin-bottom: 1em;
    background-color: #cdcdcd;
`
const UserDetails = styled.div`
    display: flex;
    align-items: center;
`
const UserImg = styled.img`
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 50%;
`
const UserName = styled.span`
    color: #000;
    font-size: 15px;
`

function ReviewCard(props){
    const {url, userName, reviewText} = props

    return (
        <CardContainer>
            <QuoteIcon>
                <FontAwesomeIcon icon={faQuoteLeft} />
            </QuoteIcon>
            <Marginer direction="vertical" margin="6em" />
            <ReviewText>{reviewText}</ReviewText>
            <Marginer direction="vertical" margin="7em" />
            <Line />
            <UserDetails>
                <UserImg src={url} />
                <UserName>{userName}</UserName>
            </UserDetails>
        </CardContainer>
    )
}

export default ReviewCard
