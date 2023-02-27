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

import { selectors } from '../../data/selectors'
import { useLayoutEffect } from 'react'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const PatientTable = (props) => {
  const { sort, type } = props
  const { sorts, types } = selectors
  const [loadedData, setLoadedData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [rightData, setRightData] = useState([])
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const loadData = () => {
    const url = 'http://192.168.1.13:4000/api/patient'
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
      return selectedType.label.includes(item.PTNTINFO_PKFG) ? true : false
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
    let resultData = [...setDataType(loadedData)]
    setDataSort(resultData)
  }, [sort, type])

  useEffect(() => {
    loadData()
  }, [])

  const handleNameClick = (patno) => {
    const url = 'http://192.168.1.13:4000/api/patient/click'

    axios
      .post(url, { patno: patno })
      .then((response) => {
        setRightData(response.data.data)
        console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const TabItem = (props) => {
    const {
      key,
      PTNTINFO_IDNO,
      PTNTINFO_NAME,
      PTNTINFO_SEX,
      PTNTINFO_AGE,
      PTNTINFO_BITH,
      PTNTINFO_PKFG,
    } = props

    return (
      <Container className="PatientLeft">
        <Box className="InfoTop">
          <Box>{key}</Box>
          <Box>{PTNTINFO_IDNO}</Box>
          <Box>{PTNTINFO_NAME}</Box>
          <Box>
            {PTNTINFO_SEX}/{PTNTINFO_AGE}
          </Box>
          <Box>{PTNTINFO_BITH}</Box>
        </Box>
        <Box className="InfoBottom">
          <Box id="vr">V</Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box>{PTNTINFO_PKFG}</Box>
        </Box>
      </Container>
    )
  }
  const [personName, setPersonName] = useState([])

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
        {!!sortedData?.length &&
          sortedData.map((row, index) => (
            <Tab
              key={index}
              label={<TabItem {...row} />}
              {...a11yProps(0)}
              onClick={() => handleNameClick(row.PTNTINFO_IDNO)}
            />
          ))}
      </Tabs>
      <TableContainer className="PatientRight">
        <Table>
          <TableBody>
            {rightData?.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <T id="room">{row.PTNTEXAM_RMCD}</T>
                  <T id="name">{row.PTNTINFO_NAME}</T>
                </TableCell>
                <TableCell component="th" scope="row">
                  <T>{row.PTNTEXAM_RMNM}</T>
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
