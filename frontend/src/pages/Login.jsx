import React, { useState } from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
  } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { loginAPI } from '../store/users/user.actions';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [creds,setCreds]=useState({email:"",password:""})
  const dispatch=useDispatch()
  const auth=useSelector((store)=>store.users)
  console.log(auth)
  const handleSignIn=(e)=>{
    e.preventDefault();
    dispatch(loginAPI(creds))
    setCreds({email:"",password:""})
  }

  if(auth._id){
    return <Navigate to={"/"} />
  }
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
          <Input value={creds.email} onChange={(e)=>setCreds({...creds,email:e.target.value})} id="email" type="email" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input value={creds.password} onChange={(e)=>setCreds({...creds,password:e.target.value})} id="password" type="password" />
        </FormControl>
        <Button onSubmit={handleSignIn} width={"100%"} mt={4} type="submit">
          Login
        </Button>
      </Box>
      </>
  )
}

export default Login