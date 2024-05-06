import React from 'react'
import { Link } from 'gatsby'
import { useBlogPost } from '../../hooks/useBlogPost'
import { Wrapper } from './LatestBlogPost.styles'

const LatestBlogPost = () => {

 const data = useBlogPost();
 console.log(data)
 
  return (
    <Wrapper>
    LatestBlogPost
    </Wrapper>
  )
}

export default LatestBlogPost