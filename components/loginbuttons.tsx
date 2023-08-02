#backup login buttons

<Flex direction="column" bg={formBackground} p={12} rounded={6}>
  <Heading mb={8} textAlign="center">
      Inloggen
  </Heading>
  <Input
    placeholder="jordybeer@duck.com"
    variant="filled"
    mb={2}
    type="email"
  />
  <Input
    placeholder="************"
    variant="filled"
    mb={6}
    type="password"
  />
  <Button colorScheme="teal" textAlign="center">
    Login
  </Button>
</Flex>