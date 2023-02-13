import { Container } from '@mui/material'

import React from 'react'
import { Header, PatientTable } from '../../component'

const PatientPage = () => {
  return (
    <Container className="PatientPage">
      <Header />
      <PatientTable />
    </Container>
  )
}

export { PatientPage }
