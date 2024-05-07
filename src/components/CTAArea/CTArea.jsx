import React from 'react';
import { Wrapper } from '../../components/CTAArea/CTAArea.styles';
import CallToAction from '../CTA/CallToAction';
import { useCTAQuery } from '../../hooks/useCTAQuery';

const useCTA = () => {

  const { loading, error, data } = useCTAQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Wrapper>
      CTA Area
    </Wrapper>
  )
}


// const CTArea = () => {
//   const { loading, error, data } = useCTAArea();

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const ctaData = data?.wpPage?.ACF_HomePage;

//   return (
//     <Wrapper>
//       {[1, 2, 3].map((index) => (
//         <CallToAction
//           key={index}
//           image={ctaData[`cta${index}Image`]?.localFile?.childImageSharp?.gatsbyImageData}
//           link={ctaData[`cta${index}Link`]}
//           text={ctaData[`cta${index}Text`]}
//         />
//       ))}
//     </Wrapper>
//   );
// };

export default useCTA;
