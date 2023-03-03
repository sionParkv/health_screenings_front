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
import { async } from 'q'

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
    const url = 'http://localhost:4000/api/inspection'
    axios.get(url).then((response) => {
      let resultData = response?.data?.data || []
      setLoadedData(resultData)
      resultData = setDataType(resultData)
      setDataSort(resultData)
    })
  }
  // 왼쪽 셀렉트 필터
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
        if (a.PTNTEXAM_IDNO < b.PTNTEXAM_IDNO) {
          return orders[1] === 'ASC' ? -1 : 1
        } else if (a.PTNTEXAM_IDNO > b.PTNTEXAM_IDNO) {
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

  // 각각의 행 클릭마다 데이터 호출
  const handleNameClick = async (room) => {
    const url = 'http://localhost:4000/api/inspection/click'

    axios
      .post(url, { room: room })
      .then((response) => {
        setRightData(response.data.data)
        // console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  // 왼쪽 데이터
  const TabItem = (props) => {
    const { PKFGNAME, EXAMRMNM, P_CNT, W_CNT, N_CNT, F_CNT } = props
    return (
      <Container className="InspectionLeft">
        <Box className="InfoTop">
          <Box>{PKFGNAME}</Box>
          <Box id="room">{EXAMRMNM}</Box>
        </Box>
        <Box className="InfoBottom">
          <Box>진행 {P_CNT}</Box>
          <Box>대기 {W_CNT}</Box>
          <Box>미실행 {N_CNT}</Box>
          <Box>완료 {F_CNT}</Box>
        </Box>
      </Container>
    )
  }

  const [personName, setPersonName] = useState([])

  const handleSelectChange = (event) => {
    setPersonName(event.target.value)
    console.log(setPersonName)
  }

  const names = ['진행중', '대기', '미실행', '거부', '완료']

  return (
    <Box>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >
        {!!sortedData?.length &&
          sortedData?.map((row, index) => (
            <Tab
              key={index}
              label={<TabItem {...row} />}
              {...a11yProps(0)}
              onClick={() => handleNameClick(row.PTNTEXAM_RMCD)}
            />
          ))}
      </Tabs>
      <TableContainer className="InspectionRight">
        <Table sx={{ minWidth: 600 }}>
          <TableBody>
            {!!rightData?.length &&
              rightData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <T id="index">{index + 1}</T>
                    <T id="test">V</T>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <T id="idno">{row.PTNTEXAM_IDNO}</T>
                    <Box>{}</Box>
                  </TableCell>
                  <TableCell component="th" scope="row" id="name">
                    <T>{row.PTNTINFO_NAME}</T>
                    <T>
                      {row.PTNTINFO_SEX}/{row.PTNTINFO_AGE}
                    </T>
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <T id="birth">{row.PTNTINFO_BITH}</T>
                    <Box></Box>
                  </TableCell>
                  <TableCell component="th" scope="row" className="select">
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
                  </TableCell>
                </TableRow>
              ))}
            {!rightData?.length && (
              <TableRow>
                <TableCell className="NoData">
                  로드된 데이터가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export { InspectionTable }
