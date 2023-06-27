import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {styled} from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { tableCellClasses } from '@mui/material/TableCell'
import axios from 'axios'

import React, { useEffect, useState } from 'react'

/*const professores = [
  { id: 0, nome: "Michael Scott", curso: "SI", titulacao: "MEST" },
  { id: 1, nome: "Jimmy Halpert", curso: "CC", titulacao: "DOUT" },
  { id: 2, nome: "Dwight Schrute", curso: "EC", titulacao: "DOUT" },
  { id: 3, nome: "Pam Beesley", curso: "DD", titulacao: "GRAD" },
  { id: 4, nome: "Kevin Malone", curso: "ES", titulacao: "GRAD" },
]*/





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function Listar() {
 
  const [professores,setProfessores] = useState([])

  useEffect(
    ()=>{
        axios.get("http://localhost:3001/professores/list")
        .then(
          (response)=>{
           
            setProfessores(response.data)
            
          }
        )
        .catch(error=>console.log(error))
    },
  []
  )


function deleteProfessorById(id){
  if(window.confirm("Deseja Excluir?")){
    axios.delete(`http://localhost:3001/professores/delete/${id}`)
    .then(
      (response)=>{
          const resultado = professores.filter(professor => professor._id != id)
          setProfessores(resultado)
      }
    )
   
  }
}


  return (
    <>
      <Typography variant='h5' fontWeight='bold'>
        Listar Professores
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple-table' >
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>NOME</StyledTableCell>
              <StyledTableCell>CURSO</StyledTableCell>
              <StyledTableCell>TITULAÇÃO</StyledTableCell>
              <StyledTableCell>AÇÕES</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              professores.map(
                (professor) => {
                  return (
                    <StyledTableRow key={professor._id}>
                      <StyledTableCell>{professor._id}</StyledTableCell>
                      <StyledTableCell>{professor.nome}</StyledTableCell>
                      <StyledTableCell>{professor.curso}</StyledTableCell>
                      <StyledTableCell>{professor.titulacao}</StyledTableCell>
                      <StyledTableCell>
                          <Box>
                            <IconButton 
                            aria-label='edit' 
                            color='primary'
                            component={Link}
                            to={`/editarProfessor/${professor._id}`}
                            >
                              <EditIcon/>
                            </IconButton>
                            <IconButton 
                            aria-label='delete' 
                            color='error'
                            onClick={()=>deleteProfessorById(professor._id)}
                            >
                              <DeleteIcon/>
                            </IconButton>
                          </Box>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                }
              )
            }
          </TableBody>
        </Table>

      </TableContainer>
    </>

  )
}
