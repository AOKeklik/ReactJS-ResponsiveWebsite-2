const {default: styled} = require('styled-components')

const SectionTitle = styled.h1`
    color: #000;
    font-weight: 700;
    font-size: 34px;

    @media screen and (max-width: 480px){
        text-align: center;
    }
`

export default SectionTitle
