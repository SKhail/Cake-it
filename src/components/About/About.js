import React from 'react'
import { useAboutPage } from '../../hooks/useAboutPage'
import { Wrapper, AboutImage  } from './About.styles'


const About = () => {

    const data = useAboutPage()
    // console.log(data)

    const imageData = data.wpPage.featuredImage.node.localFile.publicURL
    console.log(imageData)


  return (
    <Wrapper>
      <AboutImage image={imageData} />
     <div className='about-text'>
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content}} />
     </div>
    </Wrapper>
    
  )
}

export default About