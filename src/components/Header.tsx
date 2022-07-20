import { Avatar, Box, Divider, Heading, Icon, IconButton, Input, Select, Stack } from '@chakra-ui/react';
import {TbNorthStar} from 'react-icons/tb';
import {GoSearch} from 'react-icons/go'
import {MdArrowDropDown} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'


const Header = () => {
  return (
    <Box pl={10}
    pr={10}
    display='flex' 
    flexDir='row' 
    alignItems='center' 
    justifyContent='space-between' >
      <Box display='flex' flexDir='row' alignItems='center'>
      <IconButton
      m={5}
      aria-label='agently'
      icon={<TbNorthStar />}
      />
      <Heading>AGENTLY</Heading>
      </Box>

      <Box display='flex' 
      flexDir='row' 
      alignItems='center'
      borderWidth='1.5px' 
      borderRadius='lg'>
      <Select icon={<MdArrowDropDown />}>
        <option value='option1'>Rent</option>
      </Select>
      <Divider orientation='vertical'/>
      <Input placeholder='Where do you want to live?' />
      <IconButton icon={<GoSearch />} aria-label='search' />
      </Box>

      <Stack fontWeight='semibold' alignItems='center' direction='row'>

        <p>Own a property?</p>
        <Avatar src='https://bit.ly/broken-link' />
        <Icon as={MdOutlineKeyboardArrowDown} />
      </Stack>
      
    </Box>
  )
}

export default Header;
