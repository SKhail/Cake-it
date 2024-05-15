import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { StyleSheetManager } from 'styled-components'; 

//components
import Layout from '../components/Layout/Layout'
import PageHero from '../components/PageHero/PageHero';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import PageSideBar from '../components/PageSidebar/PageSideBar';

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
   {data.wpPage.featuredImage ? (
    <PageHero
          img={
            data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          } 
          />
   ) : null }

    <Wrapper>
    {/* {console.log("Parent data:", data.wpPage.wpParent)} */}
    <BreadCrumb parent={data.wpPage.wpParent && data.wpPage.wpParent.node} />

    <ContentWrapper>
      <PageSideBar
       parentChildren={
        data.wpPage.wpParent && data.wpPage.wpParent.node.wpChildren.nodes
       }
       currentPage={data.wpPage}
       parent={data.wpPage.wpParent && data.wpPage.wpParen.node.title}
       >

        {data.wpPage.wpChildren}
       </PageSideBar>
       <PageContent>
        <h1 dangerouslySetInnerHTML={{__html: data.wpPage.title}} />
        <div dangerouslySetInnerHTML={{__html: data.wpPage.content}} />

       </PageContent>
    </ContentWrapper>

      

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



