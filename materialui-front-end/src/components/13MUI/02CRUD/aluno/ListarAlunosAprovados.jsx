import React, { useEffect, useState } from 'react'
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { tableCellClasses } from '@mui/material/TableCell'
import axios from 'axios'

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



export default function ListarAlunoAprovados() {

    const [alunos, setAlunos] = useState([]);

    let contador = 0;
    let media = 0;
  
    console.log(alunos)
    for (let i = 0; i < alunos.length; i++) {
      
      contador += alunos[i].ira
    }
  
    media = contador / alunos.length;
    console.log(media)
    useEffect(
        () => {
            axios.get("http://localhost:3001/alunos/list")
                .then(
                    (response) => {
                      console.log(response.data)
                       const alunos = response.data.filter(aluno => aluno)
                        setAlunos(alunos);
                    }
                )
                .catch(error => console.log(error))
        },
        []
    )

    const aprovados = alunos.filter(aluno => aluno.ira > media)
    
    function deleteAlunoById(id) {
        if (window.confirm("Deseja Excluir?" + id)) {
            axios.delete(`http://localhost:3001/alunos/delete/${id}`)
                .then(
                    (response) => {
                        const deleted = alunos.filter(aluno => aluno._id != id)
                        setAlunos(deleted)

                    }
                )
                .catch(error => console.log(error))
        }
    }

    return (
        <div>
            <Typography variant='h5' fontWeight='bold'>
                Listar Alunos
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple-table' >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>INGRESSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            aprovados.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ano}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton
                                                        aria-label='edit'
                                                        color='primary'
                                                        component={Link}
                                                        to={`/editarAluno/${aluno._id}`}
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton
                                                        aria-label='delete'
                                                        color='error'
                                                        onClick={() => deleteAlunoById(aluno._id)}
                                                    >
                                                        <DeleteIcon />
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

        </div>
    )
                      };