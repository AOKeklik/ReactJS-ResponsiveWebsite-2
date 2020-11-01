import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import theme from '../../theme'

const ArrowContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border: 2px solid transparent;
    border-radius: 50%;
    background-color: rgba(113,113,113,.48);

    transition: border 250ms ease-in-out;

    &:hover{
        border: 2px solid ${theme.primary}
    }
`
const ArrowIcon = styled.div`
    margin-top: 3px;
    color: #fff;
    font-size: 29px;
`

function DownArrow() {
    return (
        <ArrowContainer>
            <ArrowIcon> <FontAwesomeIcon icon={faAngleDown} /> </ArrowIcon>
        </ArrowContainer>
    )
}

export default DownArrow
