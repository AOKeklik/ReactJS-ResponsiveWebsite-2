import React from 'react'
import styled from 'styled-components'

import theme from '../../theme'

const ButtonWrapper = styled.button`
    cursor: pointer;
    padding: ${({small}) => small ? '5px 8px' : '7px 15px'};
    border-radius: 5px;
    outline: none;
    border: 2px solid transparent;
    background-color: ${theme.primary};
    color: #fff;
    font-size: ${({small}) => small ? '12px' : '16px'};
    font-weight: 600;

    transition: border 220ms ease-in-out, background-color 220ms ease-in-out;

    &:hover{
        border: 2px solid ${theme.primary};
        background-color: transparent;
    }
`

function Button(props) {
    return (
        <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
    )
}

export default Button
