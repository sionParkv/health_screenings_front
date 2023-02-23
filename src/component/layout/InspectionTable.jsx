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
import { useState } from 'react'

import { selectors } from '../../data/selectors'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const InspectionTable = (props) => {
  const { sort, type } = props
  const { sorts, types } = selectors
  const [loadedData, setLoadedData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [rightData, setRightData] = useState([])
  const [value, setValue] = useState(0)

  // 탭 화면 클릭 이벤트
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // 탭 데이터 리스트 가져오기
  const loadData = () => {
    const url = 'http://192.168.1.13:4000/api/inspection'
    axios.get(url).then((response) => {
      let resultData = response?.data?.data || []
      setLoadedData(resultData)
      resultData = setDataType(resultData)
      setDataSort(resultData)
    })
  }

  const setDataType = (data) => {
    let selectedType = types.find((item) =>
      item.where === type ? true : false
    )
    // console.log('selected type: ', selectedType)

    if (selectedType.where === 'All') {
      return data
    }

    return data.filter((item) => {
      return selectedType.label.includes(item.PKFGNAME) ? true : false
    })
  }

  // 오른쪽 셀렉트 필터
  const setDataSort = (data) => {
    let selectedSort = sorts.find((item) =>
      item.order === sort ? true : false
    )
    // console.log('selected sort: ', selectedSort, sort)

    let dataSort = []
    const orders = selectedSort.order.split('_')
    if (orders[0].includes('NAME')) {
      dataSort = data.sort((a, b) => {
        if (a.PTNTINFO_NAME < b.PTNTINFO_NAME) {
          return orders[1] === 'ASC' ? -1 : 1
        } else if (a.PTNTINFO_NAME > b.PTNTINFO_NAME) {
          return orders[1] === 'ASC' ? 1 : -1
        } else {
          return 0
        }
      })
    } else if (orders[0].includes('NUMBER')) {
      dataSort = data.sort((a, b) => {
        if (a.PTNTINFO_IDNO < b.PTNTINFO_IDNO) {
          return orders[1] === 'ASC' ? -1 : 1
        } else if (a.PTNTINFO_IDNO > b.PTNTINFO_IDNO) {
          return orders[1] === 'ASC' ? 1 : -1
        } else {
          return 0
        }
      })
    }
    setSortedData(dataSort)
  }

  useEffect(() => loadData(), [])
  useLayoutEffect(() => {
    let resultData = setDataType(loadedData)
    setDataSort(resultData)
  }, [sort, type])

  useEffect(() => {
    loadData()
  }, [])

  const handleNameClick = () => {
    const url =
      'https://d0b6cdf5-44e7-4257-9b15-0215601c9566.mock.pstmn.io/api/inspection/right'

    axios.post(url).then((response) => {
      setRightData(response.data.data)
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

  const [personName, setPersonName] = useState([])

  const handleSelectChange = (event) => {
    setPersonName(event.target.value)
  }

  const names = ['진행중', '대기', '미실행', '거부', '완료']

  return (
    <Box>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        // aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {!!sortedData?.length &&
          sortedData.map((row, index) => (
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
