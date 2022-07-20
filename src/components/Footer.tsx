import { Box, IconButton } from '@chakra-ui/react'
import {BsGlobe} from 'react-icons/bs'

const Footer = () => {
  return (
    <Box pr={10} pl={10} display='flex' flexDir='row' justifyContent='space-between'>
    <div className='footer'>
      <ul>
        <li>© 2022 Agently, Inc.</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Sitemap</li>
        <li>Destinations</li>
      </ul>
    </div>

    <Box>
    <IconButton m={2} aria-label={''} icon={<BsGlobe/>}>
    </IconButton>
    English (US)
    </Box>



    </Box>
  )
}

export default Footer
