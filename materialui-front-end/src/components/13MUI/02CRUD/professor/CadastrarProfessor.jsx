import { Typography, TextField, Box, FormControl, InputLabel, Select, MenuItem, Button, FormLabel, FormControlLabel, FormGroup, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Cadastrar() {

  const [nome, setNome] = useState("")
  const [curso, setCurso] = useState("")
  const [titulacao, setTitulacao] = useState("GRAD")
  const [ai,setAi] = useState({es:false,al:false,ds:false,mc:false})


  const {es,al,ds,mc} = ai;
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    /*console.log(nome)
    console.log(curso)
    console.log(titulacao)
    console.log(ai)*/
    const novoProfessor ={nome,curso,titulacao,ai};
    axios.post('http://localhost:3001/professores/register',novoProfessor)
    .then(
      (response)=>{
        alert(`Professor ID ${response.data._id} adicionado!`)
        navigate('/listarProfessor')
      }
    )
    .catch(error=>console.log(error))
  }

  function handleCheckBox(event){
    setAi({
      ...ai,
      [event.target.name]:event.target.checked
    })
  }

  return (
    <div>
      <Typography variant="h5" fontWeight="bold">
        Cadastrar Professor

        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id='nome'
            name='nome'
            label="Nome Completo"
            autoFocus
            onChange={(event) => setNome(event.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id='curso'
            name='curso'
            label="Curso"
            onChange={(event) => setCurso(event.target.value)}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="select-tit-label">Titulação</InputLabel>
            <Select
              labelId='select-tit-label'
              label="Titulação"
              required
              value={titulacao}
              onChange={(event) => setTitulacao(event.target.value)}
            >
              <MenuItem value="GRAD">Graduação</MenuItem>
              <MenuItem value="MEST">Mestrado</MenuItem>
              <MenuItem value="DOUT">Doutorado</MenuItem>
            </Select>

          </FormControl>

          <FormControl
            component="fieldset"
            variant="standard"
            sx={{ mt: 2, ml: 2 }}
          >
            <FormLabel
              component="legend"
              sx={{ fontSize: 12, mb: 2 }}
            >
              Áreas de Interesse
            </FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckBox} />} label="Engenharia de Software" />
              <FormControlLabel control={<Checkbox checked={al} name='al' onChange={handleCheckBox} />} label="Algoritmos" />
              <FormControlLabel control={<Checkbox checked={ds} name='ds' onChange={handleCheckBox} />} label="Desenvolvimento de Software" />
              <FormControlLabel control={<Checkbox checked={mc} name='mc' onChange={handleCheckBox} />} label="Matemática Computacional" />
            </FormGroup>
          </FormControl>

          <Box
            sx={{display:"flex",justifyContent:"center"}}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ my: 3 }}
            >
              Cadastrar
            </Button>
          </Box>

        </Box>
      </Typography>

    </div>
  )
}
