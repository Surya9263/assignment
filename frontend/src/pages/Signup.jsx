import React from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
  } from "@chakra-ui/react";  

const Signup = () => {
  return (
    <>
    <Heading mt={14} size="lg">Signup</Heading>
      <Box
        mt={10}
        bg="white"
        color="black"
        p={4}
        boxShadow="md"
        rounded="lg"
        mx="auto"
        maxW="xl"
      >
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" />
        </FormControl>
        <Button width={"100%"} mt={4} type="submit">
          Sign up
        </Button>
      </Box>
      </>
  )
}

export default Signup