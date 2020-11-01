import React from 'react'
import styled, {css} from 'styled-components'

import BeemaLogo from '../../assets/logo/logo_croped.png'
import theme from '../../theme'

const LogoContainer = styled.div`
    display: flex;
    flex-direction: ${({inline}) => inline ? 'row' : 'column'};
    align-items: center;
`
const LogoImg = styled.img`
    width: 8em;
    height: 8em;

    ${({inline}) => inline && css`
        width: 24px;
        height: 24px;
        margin-right: 6px;
    `}

    ${({small}) => small && css`
        width: 4.8em;
        height: 4.8em;
    `}
`
const LogoText = styled.div`
    margin-top: ${(props) => props.inline ? '0px' : '6px'};
    color: ${({inline}) => inline ? '#fff' : theme.primary};
    font-size: ${({inline, small}) => inline ? '18px' : small ? '23px' : '40px'};
    font-weight: 700;
`

function index(props) {
    const {inline, small} = props

    return (
        <LogoContainer inline={inline} small={small}>
            <LogoImg inline={inline} small={small} src={BeemaLogo} />
            <LogoText inline={inline} small={small}>Beema</LogoText>
        </LogoContainer>
    )
}




export default index
