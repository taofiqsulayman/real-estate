
import React from 'react';
import { Badge, Box, Icon, Image, Tag } from '@chakra-ui/react';

import {BiBed, BiBath} from 'react-icons/bi';
import {FaToilet} from 'react-icons/fa';


type ApProps = {

  apartments: Array<any>;
  // ...rest of your props
}


const Apartments: React.FC<ApProps> = ({ apartments }) => {
  return (
    <>
      {apartments.map((house) => {
        const { id, image, status } = house;
        return (

            <Box key={id} maxW='250px' 
            borderWidth='1px' 
            borderRadius='lg' 
            overflow='hidden' 
            fontWeight="semibold"
            margin={5}>
              <Image src={image} alt={id} borderRadius="lg" />

              <Box p='2'>
                <Box display='flex' flexDir="row" justifyContent="space-between" >
                  <p>Lagos, NG</p>
                  
                  <Tag colorScheme='teal'>  
                    {status}
                  </Tag>
                  
                </Box>
                <Box fontWeight='normal'>
                  450 Kilometer away
                </Box>
                <Box
                >
                  <Badge px='3' m={2}>  
                    <Icon as={BiBed} /> 3
                  </Badge>
                  <Badge px='3' m={2}>  
                    <Icon as={BiBath} /> 3
                  </Badge>
                  <Badge px='3' m={2}>  
                    <Icon as={FaToilet} /> 3
                  </Badge>
                </Box>

                <Box>
                  <p>₦30,000,000</p>
                </Box>

              </Box>
            </Box>

        );
      })}
    </>
  );
};

export default Apartments;