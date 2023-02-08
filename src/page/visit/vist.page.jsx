import React from 'react'
import { Header, CustomPaginationActionsTable } from '../../component'
import { Container } from '@mui/material'

const VisitPage = () => {
  return (
    <Container className="MainPage">
      <Header />
      <CustomPaginationActionsTable />
    </Container>
  )
}
export { VisitPage }
