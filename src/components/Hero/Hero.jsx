import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { useHeroQuery } from '../../hooks/useHeroQuery' // passing the graphql data 
import { Wrapper, HeaderWrapper, StyledImg } from './Hero.styles'

const Hero = () => {

    const {
        wpPage: {ACF_HomePage: data},
        } = useHeroQuery();
    

        // helper function to get the images easily 
        const imageData = getImage(data.heroImage.localFile)

return (
<Wrapper>
    <StyledImg image={imageData} alt='Hero-Image' />
    <HeaderWrapper>
       <h1>{data.heroText}</h1> 
    </HeaderWrapper>
</Wrapper>
)
}

export default Hero