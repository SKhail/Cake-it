import {useStaticQuery, graphql} from 'gatsby'

export const useHeroQuery = () => {
 const data = useStaticQuery(graphql`
 query  {
    wpPage(databaseId: {eq: 47}) {
      ACF_HomePage {
        heroText
        heroImage {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
 
 `)

  return data
}