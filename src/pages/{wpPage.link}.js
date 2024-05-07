import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { StyleSheetManager } from 'styled-components'; 

//components
import Layout from '../components/Layout/Layout'

const Wrapper = styled.div
`
max-width: 1180px;
margin: 0 auto;
padding: 20px
`

const ContentWrapper = styled.div
`
display: block;

@media (min-width: 992px){
  display: flex;
}
`

const PageContent = styled.article
`
  margin-top: 20px;


`

const PageTemplate = ({ data }) => (
<StyleSheetManager shouldForwardProp={(prop) => prop !== 'menuOpen'}> 
    <Layout>
    {console.log(data)}
    <p>PageBoy</p>

    <Wrapper>

    <p>SideBar</p>
    <p>Content</p>

      

    </Wrapper>
    </Layout>
    </StyleSheetManager>
  
)

export default PageTemplate


export const pageQuery = graphql`

  query($id: String!) {
  wpPage(id: {eq: $id }) {
    id
    title
    content
    status
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1920, placeholder: DOMINANT_COLOR)
          }
        }
        wpChildren {
          nodes {
            ... on WpPage {
              id
              uri
              title
              wpParent {
                node {
                  ... on WpPage {
                    id
                    uri
                    title
                    wpChildren {
                      nodes {
                        ... on WpPage {
                          id
                          title
                          uri
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`



