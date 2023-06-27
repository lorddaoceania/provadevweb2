import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Container, TextField, Typography,Button, Link, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = ()=>{
    setShowPassword(!showPassword)
  }

  axios.get("http://localhost:3001/login")
      .then(
        (response)=>{
          console.log(response)
          
        }
      )

  const redirecionarPagina = () => {
    axios.post("http://localhost:3001/login")
    .then((response)=>{
      console.log(response);
    }
    )
  }
  return (
    <Container maxWidth="xs">
      <Box>
        <Typography 
          variant='h5'
          component='h1'
          textAlign='center'
        >
          Sign In
        </Typography>
        <TextField
          margin = "normal"
          required
          fullWidth
          autoFocus

          label="Usuario"
          id='user' 
          name='user'
          type='email'
          
        />
        <TextField
          margin = "normal"
          required
          fullWidth
          autoFocus

          label="Password"
          id='password' 
          name='password'
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment:(
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge='end'>
                  {showPassword ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            ),
          }}  
        />
        <Button
          fullWidth
          variant='contained' 
          onClick={() => redirecionarPagina}    
        >
          SIGN IN
        </Button>
        <Box 
        display='flex'
        justifyContent='space-between'
        mt='10px'
        >
          <Link
            underline='none'
            href='#'
          >
          Forgot Password?
          </Link>
          <Link
            underline='none'
            href='#'
          >
            Sign up
          </Link>
        </Box>
      </Box>
    </Container>
  )
}
