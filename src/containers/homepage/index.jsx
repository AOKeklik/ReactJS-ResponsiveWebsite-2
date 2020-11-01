import React from 'react'
import styled from 'styled-components'

import Marginer from '../../components/marginer/index'
import TopSection from './topSection'
import ServicesSection from './servicesSection'
import ReviewsSection from './reviewsSection'
import MoreAboutSection from './moreAboutSection'
import Footer from '../../components/footer'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

function Homepage(){
    return (
        <PageContainer>
            <TopSection />
            <ServicesSection />
            <Marginer direction="vertical" margin="2em" />
            <ReviewsSection />
            <MoreAboutSection />
            <Marginer direction="vertical" margin="8em" />
            <Footer />
        </PageContainer>
    )
}

export default Homepage