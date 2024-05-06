import React from 'react';
import { useQuery, gql } from '@apollo/client';
import CTArea from '../components/CTAArea/CTArea'; // Import the CTArea component

const GET_CTA_DATA = gql`
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
`;

const CTAArea = () => {
  const { loading, error, data } = useQuery(GET_CTA_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <CTArea cta={data?.wpPage?.ACF_HomePage} />; // Pass cta data as a prop to CTArea component
};

export default CTAArea;
