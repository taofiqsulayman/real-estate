import { Box, Divider, Heading, Icon, IconButton, Input, Select } from '@chakra-ui/react';
import {TbNorthStar} from 'react-icons/tb';
import {GoSearch} from 'react-icons/go'


const Header = () => {
  return (
    <Box display='flex' flexDir='row' alignItems='center' >
      <Box display='flex' flexDir='row' alignItems='center'>
      <IconButton
      m={5}
      aria-label='agently'
      icon={<TbNorthStar />}
      />
      <Heading>AGENTLY</Heading>
      </Box>

      <Box display='flex' flexDir='row' alignItems='center' border='1.5px' borderRadius='lg'>
      <Select width='xs' placeholder='Rent'>
        <option value='option1'>Rent</option>
      </Select>
      <Divider orientation='vertical'/>
      <Input placeholder='Where do you want to live?' />
      <Icon as={GoSearch} />
      </Box>
      
    </Box>
  )
}

export default Header;
