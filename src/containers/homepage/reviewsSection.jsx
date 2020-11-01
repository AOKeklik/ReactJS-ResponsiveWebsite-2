import React from 'react'
import styled from 'styled-components'
import {Element} from 'react-scroll'
import {CarouselProvider, Slider, Slide, DotGroup} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import {useMediaQuery} from 'react-responsive'

import SectionTitle from '../../components/sectionTitle/index'
import Marginer from '../../components/marginer'
import ReviewCard from '../../components/reviewCard/index'

import User1 from '../../assets/pictures/profile_picture_1.jpg'
import User2 from '../../assets/pictures/profile_picture_2.jpg'
import User3 from '../../assets/pictures/profile_picture_3.jpg'
import User4 from '../../assets/pictures/profile_picture_4.jpeg'

const ReviewsContainer = styled(Element)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 700px;
`
const StyledCarouselProvider = styled(CarouselProvider)`
    width: 50%;

    @media screen and (max-width: 480px){
        width: 100%;
    }
`
const StyledSlide = styled(Slide)`
    .carousel__inner-slide{
        display: flex;
        justify-content: center;
    }
`
const StyledDotGroup = styled(DotGroup)`
    display: flex;
    justify-content: center;
    margin: auto;
    button{
        width: 11px;
        height: 11px;
        border: none;
        outline: none;
        border-radius: 50%;
        background-color: #e4e4e4;

        &:not(:last-of-type){
            margin-right: 3px;
        }
    }
    .carousel__dot--selected{
        background-color: #c4c4c4;
    }
`

function ReviewsSection() {
    const isMobile = useMediaQuery({query: "(max-width: 480px)"})

    return (
        <ReviewsContainer>
            <SectionTitle>What Others Are Saying About Us</SectionTitle>
            <Marginer direction="vertical" margin="3em" />
            <StyledCarouselProvider 
                naturalSlideWidth={200} 
                naturalSlideHeight={250}
                totalSlides={4}
                visibleSlides={isMobile ? 1 : 2}
                dragEnabled={false}
            >
                <Slider>
                    <StyledSlide index={0}>
                        <ReviewCard
                            reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                            userName="John Coner"
                            url={User1}
                        />
                    </StyledSlide>
                    <StyledSlide index={1}>
                        <ReviewCard
                            reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                            userName="John Coner"
                            url={User2}
                        />
                    </StyledSlide>
                    <StyledSlide index={2}>
                        <ReviewCard
                            reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                            userName="John Coner"
                            url={User3}
                        />
                    </StyledSlide>
                    <StyledSlide index={3}>
                        <ReviewCard
                            reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                            userName="John Coner"
                            url={User4}
                        />
                    </StyledSlide>
                </Slider>
                <StyledDotGroup />
            </StyledCarouselProvider>
        </ReviewsContainer>
    )
}

export default ReviewsSection
