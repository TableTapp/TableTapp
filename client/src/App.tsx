import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Heading, Highlight, Center, AbsoluteCenter } from '@chakra-ui/react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container maxW='2xl' centerContent>
        <AbsoluteCenter>
          <Heading lineHeight='tall'>
            <Highlight
              query='TableTapp'
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
            >
              Welcome to TableTapp
            </Highlight>
          </Heading>
        </AbsoluteCenter>
      </Container>
    </>
  )
}

export default App
