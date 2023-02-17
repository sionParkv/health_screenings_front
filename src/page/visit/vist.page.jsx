import React from 'react'
import { Header, VisitTable } from '../../component'
import { Container } from '@mui/material'

const VisitPage = () => {
  return (
    <Container className="VisitPage">
      <Header />
      <VisitTable />
    </Container>
  )
}
export { VisitPage }
