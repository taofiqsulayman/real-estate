
import { useState } from 'react'
import data from './Data'
import Apartments from './components/Apartments'
import { Box, Center } from '@chakra-ui/react'
import TopTabs from './components/Tabs'
import Header from './components/Header'
function App() {
  const [apartments, setApartments] = useState(data)
  return (

    <>
      <Box
      backgroundColor='white'
      display='flex'
      flexDir='column'
      alignItems='center'
      width='100%'
      justifyContent='center'
      position='fixed'>
        <Header />
        <TopTabs />
      </Box>
      <Center display='flex' flexDir='column' >

      <Box display="flex"
      flexDir='row'  
      flexWrap='wrap' 
      justifyContent='centre' 
      alignItems='center'
      mt='8%'
      ml='8%'
      padding={5}>
        <Apartments apartments={apartments} />
      </Box>

    </Center>
    </>




  )
}

export default App