import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import AdbIcon from "@mui/icons-material/Adb"
import React from 'react'

export default function MyMenu() {
  return (
    <AppBar position='static'>
      <Container>
        <Toolbar>
          <AdbIcon
            sx={{
              display:"flex",mr:1
            }}
           />
           <Typography
           variant='h5'
           component='a'
           href='/'
           sx={{
            textDecoration:"none",
            color:"white",
            fontFamily:"monospace",
            letterSpacing:".3rem",
            fontWeight:"800",

           }}
           >
            CRUDV0
           </Typography>
           <Box sx={{ml:"20px"}}>
              <Button
              sx={{color:"white",my:"2"}}
              >
                Professores
              </Button>
              <Button
              sx={{color:"white",my:"2"}}
              >
                Alunos
              </Button>
              <Button
              sx={{color:"white",my:"2"}}
              >
                Sobre
              </Button>
           </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
