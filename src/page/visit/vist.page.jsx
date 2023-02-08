import React from 'react'
import { Header, CustomPaginationActionsTable } from '../../component'
import { Container } from '@mui/material'

const VisitPage = () => {
  return (
    <Container className="VisitPage Pages">
      <Header />
      <CustomPaginationActionsTable />
    </Container>
  )
}
export { VisitPage }
