import { Tabs, TabList, Tab, Box, Icon, Button } from '@chakra-ui/react';

import {BsArrowRightCircle} from 'react-icons/bs';
import {HiFilter} from 'react-icons/hi'

import React from 'react'

const TopTabs = () => {
  return (

  <Box 
  display='flex'
  alignItems='center'
  justifyContent='center' 
  mt={5}>
  <Tabs>
  <TabList>
    <Tab>House</Tab>
    <Tab>Office Space</Tab>
    <Tab>Flats and Apartments</Tab>
    <Tab>Lands</Tab>
    <Tab>Semi Detached Bungalow</Tab>
    <Tab>warehouse</Tab>
    <Tab>Mini Flat</Tab>
    <Tab>Shop in a Mall</Tab>
    <Tab> <Icon as={BsArrowRightCircle} /> </Tab>
    <Tab>  
      <Button leftIcon={<HiFilter />} variant='solid'> Filters </Button>
    </Tab>

  </TabList>
  </Tabs>
  </Box>


  )
}

export default TopTabs;
