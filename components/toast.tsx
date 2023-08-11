import { useToast, Box, Button } from '@chakra-ui/react'

function Nuke() {
  const toast = useToast()
  return (
    <Box pl={8} pr={6} pt={4} pb={4}>
      <Button
        bgColor={'#0C447F'}
        color='#fbebe3'
        position="relative"
        border="2px"
        borderColor='#007170'
        _hover={{
          bgColor: '#0051a8',
          transform: 'scale(1.25)',
        }}
        onClick={() =>
          toast({
            title: 'Voltooid!',
            description: "Wij antwoorden zo snel mogelijk.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Neem contact op
      </Button>
    </Box>
  )
}

export default Nuke;