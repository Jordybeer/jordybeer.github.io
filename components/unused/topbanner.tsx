import { Box, Text } from '@chakra-ui/react'
export default function TopBanner () {

<Box
  align="center"
  bg="rgba(255, 255, 255, 0.05)"
  p={4}
  width="100%"
  maxH={{base: 'xs', sm:'xs', md:'xl', lg:'2xl',xl:'3xl'}}
  maxW={{base:'md', sm:'md', md:'xl', lg:'2xl',xl:'3xl'}}
  fontFamily='Raleway Variable'
  fontWeight="bold"
  rounded="3xl"
  backdropFilter="blur(15px)"
  shadow="dark-lg"
  style={{ padding: '1rem' }}
>
  <Text
    pb='5'
    fontSize={{base:'2xl', sm:'2xl', md:'3xl', lg:'5xl',xl:'5xl'}}
    pt='5'
    pb='5'
    letterSpacing='wide'
    color='blue.900'
    opacity={1}
  >
    RB Lasprojecten
  </Text>
</Box>
}
