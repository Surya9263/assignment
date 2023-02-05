import React from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
  } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
    <Heading mt={14} size="lg">Login</Heading>
    <Box
        bg="white"
        color="black"
        p={4}
        boxShadow="md"
        rounded="lg"
        mx="auto"
        maxW="xl"
        mt={10}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" />
        </FormControl>
        <Button width={"100%"} mt={4} type="submit">
          Login
        </Button>
      </Box>
      </>
  )
}

export default Login