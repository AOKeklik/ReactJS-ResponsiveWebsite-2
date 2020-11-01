import React from 'react'
import styled from 'styled-components'

import Logo from '../logo/index'
import Button from '../button/index'
import Marginer from '../marginer'

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 2em;
`
const BrandContainer = styled.div``

const AccessibilityContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const LoginButton = styled(Button)`
    border: none;
    background-color: transparent;

    &:hover{
        border: none;
        background-color: transparent;
        color: rgb(212,212,212)
    }
`

function Navbar() {
    return (
        <NavbarContainer>
            <BrandContainer>
                <Logo inline />
            </BrandContainer>
            <AccessibilityContainer>
                <Button small>Get Started</Button>
                <Marginer direction="horizontal" margin="8px" />
                <LoginButton small>Login</LoginButton>
            </AccessibilityContainer>
        </NavbarContainer>
    )
}

export default Navbar
