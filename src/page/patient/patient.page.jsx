import { Container } from '@mui/material'
import React, { useState } from 'react'

import { Header, PatientTable } from '../../component'
import { selectors } from '../../data/selectors'

const PatientPage = () => {
  const { types, sorts } = selectors
  const [type, setType] = useState(types[0].where)
  const [sort, setSort] = useState(sorts[0].order)

  const handleTypeChange = (event) => {
    const eleSelector = event?.target
    if (!eleSelector) return

    setType(eleSelector.value)
  }

  const handleSortChange = (event) => {
    const eleSelector = event?.target
    if (!eleSelector) return

    setSort(eleSelector.value)
  }

  const propsSelectors = { handleSortChange, handleTypeChange, type, sort }

  return (
    <Container className="PatientPage">
      <Header {...propsSelectors} />
      <PatientTable {...propsSelectors} />
    </Container>
  )
}

export { PatientPage }
