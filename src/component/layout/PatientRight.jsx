import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Button, Container, ListItem } from '@mui/material'

import { leftPatients } from '../../data/patient.sample'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const PatientRight = () => {
  const [patients, setPatients] = useState([])

  setTimeout(() => setPatients(leftPatients), 2000)

  return (
    <Container>
      {patients.length > 0 ? (
        patients.map((patient, p) => (
          <Grid key={p} xs={5} className="PatientRight">
            <Item className="infoFirst">
              <Box>{patient.no}</Box>
              <Box>{patient.name}</Box>
            </Item>
            <Item className="infoSecond">
              <Box>{patient.check}</Box>
              <Box>대기기간:</Box>
            </Item>
            <Item className="infoThird">
              <Box></Box>
              <Box>1분 39초</Box>
            </Item>
            <Item className="button">
              <Button>미실행</Button>
            </Item>
          </Grid>
        ))
      ) : (
        <ListItem>{'no data'}</ListItem>
      )}
    </Container>
  )
}

export { PatientRight }
