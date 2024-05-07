import React from 'react'
import { Link } from 'gatsby'
import { useBlogPost } from '../../hooks/useBlogPost'
import { Wrapper } from './LatestBlogPost.styles'

const LatestBlogPost = () => {

 const data = useBlogPost();
//  console.log(data)
 
  return (
    <Wrapper>
    <h1>LatestBlogPost</h1>
    <h4>{data.allWpPost.edges[0].node.title} </h4>
    <h4>{data.allWpPost.edges[1].node.title} </h4>
    {/* <div 
        dangerouslySetInnerHTML={{
          __html: data.allWpPost.edges[1].node.excerpt
        }}
        /> */}
  
      <Link to={`/blog{data.allWpPost.edges[0].node.uri}`}>
        <h5>Find more</h5>
      </Link>
     
    </Wrapper>
  )
}

export default LatestBlogPost