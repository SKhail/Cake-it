import { useQuery, gql } from '@apollo/client';

export const useCTAQuery = () => {
  const { loading, error, data } = useQuery(gql`
    query GetCTAData {
       wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta1Image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 720, placeholder: DOMINANT_COLOR)
              }
            }
          }
          cta2Image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 720, placeholder: DOMINANT_COLOR)
              }
            }
          }
          cta3Image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 720, placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
  `);

  return { loading, error, data };
};
