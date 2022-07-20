
import { useState } from 'react'
import data from '../Data'
import Apartments from './Apartments'
import { Box, Center } from '@chakra-ui/react'
import TopTabs from './Tabs'
import Header from './Header'


function Main() {
  const [apartments, setApartments] = useState(data)
  return (

    <>
      <Box
      backgroundColor='white'
      display='flex'
      flexDir='column'
      
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
      mt='10%'
      ml='8%'
      padding={5}>
        <Apartments apartments={apartments} />
      </Box>

    </Center>
    </>




  )
}

export default Main