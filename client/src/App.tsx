import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Heading, Highlight, Center, AbsoluteCenter, VStack } from '@chakra-ui/react';
import { GenericComponent } from './components/GenericComponent';


function App() {
  return (
    <>
      <Container maxW='2xl' centerContent>
        <Heading>
          TableTapp
        </Heading>
        <GenericComponent name="susy"/>
      </Container>
    </>
  )
}

export default App
