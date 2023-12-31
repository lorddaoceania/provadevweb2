import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import AdbIcon from "@mui/icons-material/Adb"
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function MyMenu() {


  const [anchorElProfessor, setAnchorElProfessor] = useState(null);
  const handleOpenAnchorElProfessor = (event) => {
    setAnchorElProfessor(event.currentTarget);
  }
  const handleCloseAnchorElProfessor = () => {
    setAnchorElProfessor(null);
  }

  const [anchorElAluno, setAnchorElAluno] = useState(null);
  const handleOpenAnchorElAluno = (event) => {
    setAnchorElAluno(event.currentTarget);
  }
  const handleCloseAnchorElAluno = () => {
    setAnchorElAluno(null);
  }

  function dropProfMenu() {
    return (
      <Box>
        <Button
          sx={{ color: "white", my: "2" }}
          onClick={handleOpenAnchorElProfessor}
        >
          Professores
        </Button>
        <Menu
          anchorEl={anchorElProfessor}
          open={Boolean(anchorElProfessor)}
          onClose={handleCloseAnchorElProfessor}
        >
          <MenuItem
            onClick={
              () => {
                handleCloseAnchorElProfessor()
              }
              
            }
            component = {Link}
            to = {"cadastrarProfessor"}
          >
            Cadastrar
          </MenuItem>
          <MenuItem
            onClick={handleCloseAnchorElProfessor}
            component ={Link}
            to = {"listarProfessor"}
          >
            Listar
          </MenuItem>
        </Menu>
      </Box>
    )
  }
  function dropAlunoMenu() {
    return (
      <Box>
        <Button
          sx={{ color: "white", my: "2" }}
          onClick={handleOpenAnchorElAluno}
          
        >
          Alunos
        </Button>
        <Menu
          anchorEl={anchorElAluno}
          open ={Boolean(anchorElAluno)}
          onClose={handleCloseAnchorElAluno}

        >
          <MenuItem onClick={
            ()=>{
              handleCloseAnchorElAluno();
            }

          }
          component = {Link}
          to={"cadastrarAluno"}
          
          >
            Cadastrar
          </MenuItem>
          <MenuItem onClick={
            ()=>{
              handleCloseAnchorElAluno();
            }
            }
            component = {Link}
            to = {"listarAluno"}
          >
            Listar
          </MenuItem>
          <MenuItem onClick={
            ()=>{
              handleCloseAnchorElAluno();
            }
            }
            component = {Link}
            to = {"listarAprovados"}
          >
            Listar Aprovados
          </MenuItem>
        </Menu>
      </Box>
    )
  }

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar>
          <AdbIcon
            sx={{
              display: "flex", mr: 1
            }}
          />
          <Typography
            variant='h5'
            component='a'
            href='/'
            sx={{
              textDecoration: "none",
              color: "white",
              fontFamily: "monospace",
              letterSpacing: ".3rem",
              fontWeight: "800",

            }}
          >
            CRUDV1
          </Typography>
          <Box sx={{ ml: "20px", display: "flex" }}>

            {dropProfMenu()}
            {dropAlunoMenu()}
            <Button
              sx={{ color: "white", my: "2" }}
              component={Link}
              to = 'Sobre'
            >
              Sobre
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
