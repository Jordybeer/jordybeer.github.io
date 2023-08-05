import { useToast, Box, Button } from '@chakra-ui/react'


function Nuke() {
    const toast = useToast()
    return (
    <Box
    pb={10}
    pl={8}
    pr={6}
    >
      <Button
            bgColor={'#0051a8'}
            color='#fbebe3'
            boxShadow='2xl' p='6' rounded='md'
            border='1px solid white'
            _hover={{
              bgColor: '#0051a8',
              transform: 'scale(1.25)',
            }}

        onClick={() =>
          toast({
            title: 'Foei!',
            description: "Geen cadeau van de Sint dit jaar",
            status: 'warning',
            duration: 9000,
            isClosable: true,
          })
        }
      >
            Niet klikken
      </Button>
      </Box>
    )
  }
  export default Nuke;