import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyMenu from './MyMenuv1'

import CadastrarProfessor from './professor/CadastrarProfessor'
import ListarProfessor from './professor/ListarProfessor'
import EditarProfessor from './professor/EditarProfessor'

import CadastrarAluno from './aluno/CadastrarAluno'
import ListarAluno from './aluno/ListarAluno'
import EditarAluno from './aluno/EditarAluno'

import Sobre from './sobre/Sobre'

import { Container } from '@mui/material'
import ListarAlunoAprovados from './aluno/ListarAlunosAprovados'
export default function MainPage() {
  return (
    <div>
      <BrowserRouter>
        <MyMenu/>
          <Container sx={{mt:8}}>
            <Routes>
              <Route path='cadastrarProfessor' element={<CadastrarProfessor/>} />
              <Route path='listarProfessor' element={<ListarProfessor/>} />
              <Route path='editarProfessor/:id' element={<EditarProfessor/>} />
            </Routes>
          </Container>
          <Container sx={{mt:8}}>
            <Routes>
              <Route path='cadastrarAluno' element={<CadastrarAluno/>} />
              <Route path='listarAluno' element={<ListarAluno/>} />
              <Route path='editarAluno/:id' element={<EditarAluno/>} />
              <Route path='listarAprovados' element={<ListarAlunoAprovados/>}/>
            </Routes>
          </Container>
          <Container sx={{mt:8}}>
            <Routes>
              <Route path='Sobre' element={<Sobre/>} />
            </Routes>
          </Container>

      </BrowserRouter>

    </div>
  )
}
