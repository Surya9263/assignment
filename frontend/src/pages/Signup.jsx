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
import { SignupAPI } from "../store/users/user.actions";
import { Navigate } from 'react-router-dom';

const Signup = () => {
  const [user,setUser]=useState({name:"",email:"",password:""})
    const dispatch=useDispatch()
    const auth=useSelector((store)=>store.users)
    console.log(auth)

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(SignupAPI(user));
        setUser({name:"",email:"",password:""})
    }
    // if(auth._id) return <Navigate to={"/"} />
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
          <Input value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} id="name" type="text" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} id="email" type="email" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} id="password" type="password" />
        </FormControl>
        <Button onClick={handleSubmit} width={"100%"} mt={4} type="submit">
          Sign up
        </Button>
      </Box>
      </>
  )
}

export default Signup