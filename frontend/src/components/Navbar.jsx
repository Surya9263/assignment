import React from 'react'
import {
    Box,
    Flex,
    Link,
    useColorMode,
  } from "@chakra-ui/react";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="nav"
      bg="linear-gradient(to bottom, #dd2476, #ff512f)"
      color="white"
      px={4}
      py={2}
      boxShadow="md"
    >
      <Flex align="center" maxW="6xl" mx="auto">
        <Box ml="auto">
          <Link href="#" mr={4}>
            User
          </Link>
          <Link href="login" mr={4}>
            Login
          </Link>
        </Box>

        <button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </Flex>
    </Box>
  )
}

export default Navbar