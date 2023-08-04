import { useToast, Box, Button } from '@chakra-ui/react'


function Nuke() {
    const toast = useToast()
    return (
    <Box
    pb={10}
    >
      <Button
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