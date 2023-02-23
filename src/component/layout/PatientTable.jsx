import React, { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import {
  Box,
  Select,
  Typography as T,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  FormControl,
  MenuItem,
} from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const PatientTable = () => {
  const [rightData, setRightData] = useState([])
  const [leftData, setLeftData] = useState([])
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const loadData = () => {
    const url = 'https://localhost:4000/api/patient'
    axios.get(url).then((response) => {
      console.log(response?.data?.data)
      const res = response?.data?.data || []
      setLeftData(res)
    })
  }
  React.useEffect(() => {
    loadData()
  }, [])

  const handleNameClick = () => {
    const url =
      'https://d0b6cdf5-44e7-4257-9b15-0215601c9566.mock.pstmn.io/api/patient/right'

    axios.post(url).then((response) => {
      setRightData(response.data.data)
    })
  }

  const TabItem = (props) => {
    const { sort, patinetNum, name, age, birth, test, test2 } = props

    return (
      <Container className="PatientLeft">
        <Box className="InfoTop">
          <Box>{sort}</Box>
          <Box>{patinetNum}</Box>
          <Box>{name}</Box>
          <Box>{age}</Box>
          <Box>{birth}</Box>
        </Box>
        <Box className="InfoBottom">
          <Box id="vr">{test}</Box>
          <Box>{}</Box>
          <Box></Box>
          <Box></Box>
          <Box>{test2}</Box>
        </Box>
      </Container>
    )
  }
  const [personName, setPersonName] = React.useState([])

  const handleSelectChange = (event) => {
    setPersonName(event.target.value)
  }

  const names = ['미실행', '대기', '완료', '검사중']
  return (
    <Box>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >
        {leftData.map((row, index) => (
          <Tab
            key={index}
            label={<TabItem {...row} />}
            {...a11yProps(0)}
            onClick={handleNameClick}
          />
        ))}
      </Tabs>
      <TableContainer>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {rightData.map((row, index) => (
              <TableRow key={index} className="PatientRight">
                <TableCell component="th" scope="row">
                  <T>{row.gumsa}</T>
                  <T>{row.name}</T>
                </TableCell>
                <TableCell component="th" scope="row">
                  <T>{row.gumsaName}</T>
                  <T>{row.time}</T>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Box>
                    <FormControl>
                      <Select
                        displayEmpty
                        value={personName}
                        onChange={handleSelectChange}
                      >
                        <MenuItem value="">
                          <em>선택하세요</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            {row.state}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
  //   <Box sx={{ width: '100%' }}>
  //     <Grid container rowSpacing={1} classname="PatientTable">
  //       <PatientLeft />
  //       <PatientRight />
  //     </Grid>
  //   </Box>
  // )
}

export { PatientTable }
