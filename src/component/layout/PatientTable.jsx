import React, { useState } from 'react'
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
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleNameClick = () => {
    const url =
      'https://a52d984b-178c-409d-b64f-5e4e8cd159a0.mock.pstmn.io/api/patient/right'

    axios.post(url).then((response) => {
      setRightData(response.data.data)
    })
  }

  const TabItem = (props) => {
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

  const names = ['Oliver Hansen', 'Van Henry', 'April Tucker']
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        // aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab
          label={
            <TabItem
              sort="1"
              patientNumber="019272729"
              name="홍길동"
              age="M/29"
              birth="080222"
              vr="V"
              package="패키지Z"
              type="일반검진접수"
            />
          }
          {...a11yProps(0)}
          onClick={handleNameClick}
        />
        <Tab label="반광범" {...a11yProps(1)} />
        <Tab label="신휴심" {...a11yProps(2)} />
        <Tab label="육손연" {...a11yProps(3)} />
        <Tab label="채석자" {...a11yProps(4)} />
        <Tab label="표약흠" {...a11yProps(5)} />
        <Tab label="한이철" {...a11yProps(6)} />
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
                          <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
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
