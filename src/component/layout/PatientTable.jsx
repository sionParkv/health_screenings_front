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
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleNameClick = () => {
    const url =
      'https://d0b6cdf5-44e7-4257-9b15-0215601c9566.mock.pstmn.io/api/patient/right'

    axios.post(url).then((response) => {
      setRightData(response.data.data)
    })
  }

  const TabItem = (props) => {
    const [page] = useState(0)
    const [data, setData] = useState([])

    const url =
      'https://d0b6cdf5-44e7-4257-9b15-0215601c9566.mock.pstmn.io/api/patient/left'

    const loadData = () => {
      axios.post(url).then((response) => {
        const res = response?.data?.data || []
        setData(res)
      })
    }

    useEffect(() => {
      loadData()
    }, [page])
    return (
      <Container className="PatientLeft">
        <Box className="InfoTop">
          <Box>{props.sort}</Box>
          <Box>{props.patientNumber}</Box>
          <Box>{props.name}</Box>
          <Box>{props.age}</Box>
          <Box>{props.birth}</Box>
        </Box>
        <Box className="InfoBottom">
          <Box id="vr">{props.vr}</Box>
          <Box>{props.package}</Box>
          <Box></Box>
          <Box></Box>
          <Box>{props.type}</Box>
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
        <Tab
          label={
            <TabItem
              sort="1"
              patientNumber="8755499"
              name="반광범"
              age="F/81"
              birth="440724"
              vr="VR"
              package="패키지P"
              type="종합검진접수"
            />
          }
          {...a11yProps(0)}
          onClick={handleNameClick}
        />
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
