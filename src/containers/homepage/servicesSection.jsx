import React from 'react'
import styled from 'styled-components'
import {Element} from 'react-scroll'

import SectionTitle from '../../components/sectionTitle/index'
import Marginer from '../../components/marginer/index'
import OurServices from '../../components/ourService/index'

import Services1Img from '../../assets/illustrations/web_development_.png'
import Services2Img from '../../assets/illustrations/mobile_phone.png'
import Services3Img from '../../assets/illustrations/bug_fixed.png'

const ServicesContainer = styled(Element)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 1100px;
    padding: 10px 0;
`

function servicesSection() {
    return (
        <ServicesContainer name="servicesSection">
            <SectionTitle>Best Quality Software</SectionTitle>
            <Marginer direction="vertical" margin="3em" />
            <OurServices 
                url={Services1Img}
                title="Fully Integrated Services" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos suscipit, laboriosam quam sequi repellat nobis?"
            />
            <OurServices 
                url={Services2Img}
                title="Mobile Optimized" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos suscipit, laboriosam quam sequi repellat nobis?"
                isReversed
            />
            <OurServices 
                url={Services3Img}
                title="Quality is Our Priority" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos suscipit, laboriosam quam sequi repellat nobis?"
            />
        </ServicesContainer>
    )
}

export default servicesSection
