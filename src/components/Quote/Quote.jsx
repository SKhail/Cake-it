import React from "react";
import { useQuoteQuery } from "../../hooks/useQuoteQuery";
import QuoteImg from '../../images/quote.svg';
import {Wrapper , Content } from './Quote.styles'

const Quote = () => {

  const data = useQuoteQuery()
//   console.log(data)
  const quoteText = data.wpPage.ACF_HomePage.citat1Text;
  const quoteAuthor = data.wpPage.ACF_HomePage.citat1Author;

  return (
    <Wrapper>
        <Content>
            <img src={QuoteImg} alt='Quote' />
            <h6>{quoteText}</h6>
            <h6>{quoteAuthor}</h6>
        </Content>
    </Wrapper>
  )
}

export default Quote