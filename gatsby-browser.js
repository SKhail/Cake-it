import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/apolloClient';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
