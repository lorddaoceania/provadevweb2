import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditarAluno() {

  let {id} = useParams()
  const navigate = useNavigate();
 
  //[] vazio faz o useEffect funcionar como construtor
  useEffect(
    ()=>{
      axios.get(`http://localhost:3001/alunos/list/${id}`)
      .then(
        (response)=>{
          setNome(response.data.nome)
          setCurso(response.data.curso)
          setAno(response.data.ano)
          setIra(response.data.ira);
          
        }
      )
      .catch(error=>console.log(error))
    }
    ,[id]
  )

  const [nome, setNome] = useState("")
  const [curso, setCurso] = useState("")
  const [ano, setAno] = useState(0)
  const [ira,setIra] = useState(0);

  function handleSubmit(event) {
    event.preventDefault()
    /*console.log(nome)
    console.log(curso)
    console.log(ano)
    console.log(ira)*/
    const updateAluno = {nome,curso,ano,ira}

    axios.put(`http://localhost:3001/alunos/update/${id}`,updateAluno)
    .then(
      (response)=>{
        alert(`Aluno de ${response.data._id} atualizado com sucesso!`)
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
        Editar Aluno
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
          value={nome}
          name='nome'
          label="Nome Completo"
          onChange={(event) => setNome(event.target.value)}
          autoFocus
        />
        <TextField
          type='number'
          id='ano'
          margin='normal'
          value={ano}
          name='ano'
          label='Ano de Ingresso'
          onChange={(event) => setAno(event.target.value)}
        />
         <TextField
          sx={{ml:2}}
          type='number'
          margin='normal'
          id='ira'
          value={ira}
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
          </Select>
        </FormControl>
        <Box sx={{mt:2, display:"flex", justifyContent:"center"}}>
          <Button 
          variant='contained'
          type='submit'
          >
            Atualizar
          </Button>
        </Box>




      </Box>
    </div>
  )
}
