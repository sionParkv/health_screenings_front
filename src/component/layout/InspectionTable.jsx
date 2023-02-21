import * as React from 'react'
import Box from '@mui/material/Box'
import {
  Container,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography as T,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material'
import axios from 'axios'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const InspectionTable = () => {
  const [rightData, setRightData] = React.useState([])
  const [leftData, setLeftData] = React.useState([])
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const url =
    'https://d0b6cdf5-44e7-4257-9b15-0215601c9566.mock.pstmn.io/api/inspection/left'

  const loadData = () => {
    axios.post(url).then((response) => {
      console.log(response?.data?.data)
      const res = response?.data?.data || []
      setLeftData(res)
    })
  }
  console.log(leftData, '@@@@@')

  React.useEffect(() => {
    loadData()
  }, [])

  const handleNameClick = () => {
    const url =
      'https://d0b6cdf5-44e7-4257-9b15-0215601c9566.mock.pstmn.io/api/inspection/right'

    axios.post(url).then((response) => {
      setRightData(response.data.data)
      console.log(response.data.data)
    })
  }

  // const handleNameClick2 = () => {
  //   const url =
  //     'https://d0b6cdf5-44e7-4257-9b15-0215601c9566.mock.pstmn.io/api/inspection/right2'

  //   axios.post(url).then((response) => {
  //     setRightData(response.data.data)
  //     console.log(response.data.data)
  //   })
  // }

  const TabItem = (props) => {
    const { oi, gum, current, wait, not, complete } = props
    return (
      <Container className="InspectionLeft">
        <Box className="InfoTop">
          <Box>{oi}</Box>
          <Box id="room">{gum}</Box>
        </Box>
        <Box className="InfoBottom">
          <Box>진행 {current}</Box>
          <Box>대기 {wait}</Box>
          <Box>미실행 {not}</Box>
          <Box>완료 {complete}</Box>
        </Box>
      </Container>
    )
  }

  const [personName, setPersonName] = React.useState([])

  const handleSelectChange = (event) => {
    setPersonName(event.target.value)
  }

  const names = ['진행중', '대기', '미실행', '거부', '완료']

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
              <TableRow key={index} className="InspectionRight">
                <TableCell component="th" scope="row">
                  <T>{row.sort}</T>
                  <T>{row.test}</T>
                </TableCell>
                <TableCell component="th" scope="row">
                  <T>{row.patientNum}</T>
                  <T>{row.package}</T>
                </TableCell>
                <TableCell component="th" scope="row">
                  <T>{row.test2}</T>
                  <Box></Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <T>{row.name}</T>
                  <T>{row.age}</T>
                </TableCell>
                <TableCell component="th" scope="row">
                  <T>{row.birth}</T>
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
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box></Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    // <Box sx={{ width: '100%' }}>
    //   <Grid container rowSpacing={1}>
    //     <InspectionLeft />
    //     <InspectionRight />
    //   </Grid>
    // </Box>
  )
}

export { InspectionTable }
