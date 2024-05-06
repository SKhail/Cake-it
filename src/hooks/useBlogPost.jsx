import { useStaticQuery, graphql } from "gatsby"

export const useBlogPost = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allWpPost(limit: 2) {
          edges {
            node {
              id
              title
              excerpt
              slug
              uri
            }
          }
        }
      }
    `)
     return data
    
    }