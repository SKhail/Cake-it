import React from 'react'
import { useAboutPage } from '../../hooks/useAboutPage'
import { Wrapper, AboutImage  } from './About.styles'


const About = () => {

    const data = useAboutPage()
    console.log(data)

  return (
    <Wrapper>
      About test
    </Wrapper>
    
  )
}

export default About