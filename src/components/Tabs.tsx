import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';

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
    <Tab>Semi Detached Duplex</Tab>
    <Tab>warehouse</Tab>
    <Tab>Mini Flat</Tab>
    <Tab>Shop in a Mall</Tab>

  </TabList>
  </Tabs>
  </Box>


  )
}

export default TopTabs;
