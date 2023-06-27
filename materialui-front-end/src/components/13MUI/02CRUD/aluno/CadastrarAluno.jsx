import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CadastrarAluno() {
  
  const [nome, setNome] = useState("")
  const [curso, setCurso] = useState("")
  const [ano, setAno] = useState(0)
  const [ira,setIra] = useState(0.0);

const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    /*console.log(nome)
    console.log(curso)
    console.log(ano)
    console.log(ira)*/
    const novoAluno = {nome,curso,ano,ira}
    axios.post('http://localhost:3001/alunos/register',novoAluno)
    .then(
      (response)=>{
        alert(`Aluno de ID ${response.data._id} adicionado com sucesso`)
        navigate('/listarAluno')
      }
    )
    .catch(error=>console.log(error))

  }

  const handleIraChange = (event) =>{
    setIra(parseFloat(event.target.value));
  }


  return (
    <div>
      <Typography variant='h5' fontWeight='bold'>
        Cadastrar Aluno
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
      >
        <TextField
          margin='normal'
          required
          fullWidth
          id='nome'
          name='nome'
          label="Nome Completo"
          onChange={(event) => setNome(event.target.value)}
          autoFocus
        />
        <TextField
          type='number'
          id='ano'
          name='ano'
          label='Ano de Ingresso'
          onChange={(event) => setAno(event.target.value)}
        />
        <TextField
          sx={{ml:2}}
          type='number'
          id='ira'
          name='ira'
          label='IRA'
          onChange={handleIraChange}
          inputProps={{step:0.01}}
       
        />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="select-cur-label">Curso</InputLabel>
          <Select
            labelId='select-cur-label'
            label='Curso'
            value={curso}
            onChange={(event) => setCurso(event.target.value)}
          >
            <MenuItem value="CC">Ciência da Computação</MenuItem>
            <MenuItem value="DD">Design Digital</MenuItem>
            <MenuItem value="EC">Engenharia da Computação</MenuItem>
            <MenuItem value="ES">Engenharia de Software</MenuItem>
            <MenuItem value="SI">Sistemas de Informação</MenuItem>
            <MenuItem value="RC">Redes de Computadores</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{mt:2, display:"flex", justifyContent:"center"}}>
          <Button 
          variant='contained'
          type='submit'
          >
            Cadastrar
          </Button>
        </Box>




      </Box>
    </div>
  )
}
