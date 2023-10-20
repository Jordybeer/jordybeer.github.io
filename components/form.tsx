import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from 'react';
import { useToast } from "@chakra-ui/react";
import { BsInstagram, BsYoutube, BsPerson, BsFacebook } from "react-icons/bs";
import { MdEmail, MdPerson, MdFlag } from "react-icons/md";

const ContactForm: React.FC = () => {

  const bg = "linear-gradient(55deg, #34139546 30%, #0F2E77CE 70%)";

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');


  const toast = useToast();

  const handleSubmit = async () => {
    const formData = {
      name,
      email,
      message,
      subject,
    };

    try {
      const response = await fetch('http://localhost:3001/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Bericht verstuurd.",
          description: "We hebben je bericht succesvol ontvangen.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Bericht niet verstuurd.",
          description: "Er ging iets mis. Probeer later opnieuw.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Netwerkfout.",
        description: "controleer uw internetverbinding en probeer opnieuw.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex>
      <VStack spacing={{ base: 4, md: 8, lg: 20 }} width="100%">
        <Box
        mx="auto"
        display="flex"
        maxW={{ base: "7xl" }}
        width={{ base: "100vw", sm: "100vw" }}
        transition={"background 0.3s ease"}
        px={{ base: 4, sm: 6, lg: 10 }}
        mt="auto"
        position="relative"
        zIndex={2}
        bg={bg}
        justifyContent="center"
        shadow={{ base: "none", md: "dark-lg" }}
        border='1mm ridge #3A80C56F'
        width={{ base: "100vw", sm: "100vw" }}
        maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}

        >
          <VStack spacing={5} p={10}>
            <FormControl isRequired>
              <FormLabel>Naam</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdPerson />
                </InputLeftElement>
                <Input type="text" placeholder="naam" value={name} onChange={(e) => setName(e.target.value)} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdEmail />
                </InputLeftElement>
                <Input type="email" placeholder ="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Onderwerp</FormLabel>
              <InputGroup>
                  <InputLeftElement>
                    <MdFlag />
                 </ InputLeftElement>
               <Input type="text" placeholder="onderwerp"value={subject} onChange={(e) => setSubject(e.target.value)} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Bericht</FormLabel>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Vul hier je bericht in"
                rows={6}
                resize="none"
              />
            </FormControl>


            <Button
              colorScheme="blue"
              bg="blue.700"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
              width="full"
              onClick={handleSubmit}
            >
              Verstuur bericht
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default ContactForm;
