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
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { BsInstagram, BsYoutube, BsPerson, BsFacebook } from "react-icons/bs";
import { MdEmail, MdPerson, MdFlag } from "react-icons/md";
import Layout from "../components/layout";

import NewButton from "../components/newbutton";

const ContactForm: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (router.query.productTitle) {
      setSubject(`Aanvraag Offerte omtrent ${router.query.productTitle}`);
    }
  }, [router.query]);

  const bg = "linear-gradient(55deg, #34139546 30%, #0F2E77CE 70%)";

  const toast = useToast();

  const handleSubmit = async () => {
    const formData = {
      name,
      email,
      message,
      subject,
    };

    try {
      const response = await fetch("http://localhost:3001/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
    <Flex direction="column" align="center" justify="center" p={8} marginTop="10vh" minHeight="90vh">
      <VStack spacing={{ base: 4, md: 8, lg: 20 }} width="100%">

        <Box
          mx="auto"
        borderRadius="lg"
          rounded="3xl"
          display="flex"
          maxW={{ base: "7xl" }}
          width={{ base: "100vw", sm: "100vw" }}
          transition={"background 0.3s ease"}
          px={{ base: 4, sm: 6, lg: 10 }}
          mt="auto"
          boxShadow="lg"
          position="relative"
          zIndex={2}
          p={6}
          bg={bg}
          justifyContent="center"
          shadow={{ base: "none", md: "dark-lg" }}
          border="solid 2px black"
          width={{ base: "100vw", sm: "100vw" }}
          maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}
        >
          <VStack spacing={5} p={10} width="120%">
            <FormControl isRequired>
              <FormLabel>Naam</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdPerson />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="naam"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdEmail />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Onderwerp</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <MdFlag />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="onderwerp"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Bericht</FormLabel>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Vul hier je bericht in"
                rows={4}
                resize="vertical"
              />
            </FormControl>

            <NewButton label="Verstuur Bericht" click={handleSubmit} />
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default ContactForm;
