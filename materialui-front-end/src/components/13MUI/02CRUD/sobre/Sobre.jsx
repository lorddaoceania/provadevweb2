import { Typography } from '@mui/material'
import React from 'react'

export default function Sobre() {
    return (
        <>
            <Typography variant='h3'>
                Sobre o Crud
            </Typography>
            <Typography sx={{mt:5}} variant='h5'>
                Nesse projeto feito na turma de Desenvolvimento WEB 2023.1 está implementado
                um sistema de crud padrão usando link com express e banco de dados MongoDB e mongoose
                nele podemos fazer todas os operações padrões de um CRUD(Create,Read,Update,Delete).
            </Typography>
        </>
    )
}
