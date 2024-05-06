import React from 'react';
import { Wrapper } from '../../components/CTAArea/CTAArea.styles';
import CallToAction from '../CTA/CallToAction';

const CTArea = ({ cta }) => {
  // Check if cta object exists and has ACF_HomePage property
  if (!cta || !cta.ACF_HomePage) {
    return <p>No data available</p>; // or render a loading indicator
  }

  return (
    <Wrapper>
      {[1, 2, 3].map((index) => (
        <CallToAction
          key={index}
          image={cta.ACF_HomePage[`cta${index}Image`]?.localFile?.childImageSharp?.gatsbyImageData}
          link={cta.ACF_HomePage[`cta${index}Link`]}
          text={cta.ACF_HomePage[`cta${index}Text`]}
        />
      ))}
    </Wrapper>
  );
};

export default CTArea;
