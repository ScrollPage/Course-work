import React from 'react';
import { Container } from './Container';
import { Header } from './Header';
import { Container as ChakraContainer } from '@chakra-ui/react';

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container height="100vh">
      <Header />
      <ChakraContainer maxW="xl" height="full" mt="120px">
        {children}
      </ChakraContainer>
    </Container>
  );
};
