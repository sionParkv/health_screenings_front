import React from 'react'
import { Header, VisitTable } from '../../component'
import { Container } from '@mui/material'

const VisitPage = () => {
  const [value, setValue] = React.useState('')
  const [sortValue, setSortValue] = React.useState('')

  const handleChange = (event) => {
    setValue(event.target.value === '전체' ? '' : event.target.value)
    setSortValue(
      event.target.SortValue === '전체' ? '' : event.target.SortValue
    )
    console.log(event)
  }

  const propsHeader = {
    handleChange: handleChange,
    value: value,
    sortValue: sortValue,
  }
  console.log('11111', value)
  console.log('22222', propsHeader)
  return (
    <Container className="VisitPage">
      <Header {...propsHeader} />
      <VisitTable {...propsHeader} />
    </Container>
  )
}
export { VisitPage }
