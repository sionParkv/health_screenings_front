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

import { images } from '../../assets/images'
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
  const circleAlert = images.alertCircle

  // 왼쪽 화면 클릭 이벤트
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // 왼쪽 데이터 리스트 가져오기
  const loadData = () => {
    const url = 'http://192.168.1.98:4000/api/inspection'
    axios.get(url).then((response) => {
      let resultData = response?.data?.data || []
      setLoadedData(resultData)
      resultData = setDataType(resultData)
      setDataSort(resultData)
    })
  }

  useEffect(() => loadData(), [])
  useLayoutEffect(() => {
    let resultData = [...setDataType(loadedData)]
    setDataSort(resultData)
  }, [sort, type])

  useEffect(() => {
    loadData()
  }, [])

  // 종합, 일반검진 필터
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

  // 이름별, 환자번호별 필터
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

  // 각각의 행 클릭마다 데이터 호출
  const handleNameClick = async (room) => {
    const url = 'http://192.168.1.98:4000/api/inspection/click'

    axios
      .post(url, { room: room })
      .then((response) => {
        setRightData(response.data.data)
        localStorage.setItem('cr', room)
        console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  // 오른쪽 셀렉트 박스
  const states = [
    {
      state: 'N',
      label: '미실행',
    },
    {
      state: 'W',
      label: '대기',
    },
    {
      state: 'I',
      label: '검사중',
    },
    {
      state: 'F',
      label: '완료',
    },
    {
      state: 'D',
      label: '거부',
    },
  ]

  // 오른쪽 셀렉트 박스 클릭 이벤트
  const handleSelectChange = (event, index) => {
    const oriData = [...rightData]

    const url = 'http://192.168.1.98:4000/api/inspection/change'
    const { PTNTEXAM_RMCD, PTNTEXAM_IDNO, PTNTEXAM_RMNUM } = rightData[index]
    console.log(
      `[Inspection.handleSelectChange] request data - RMCD: ${PTNTEXAM_RMCD} IDNO: ${PTNTEXAM_IDNO} STAT: ${
        event?.target?.value
      } RMNUM: ${PTNTEXAM_RMNUM} USERID: ${localStorage.getItem('ui')}`
    )

    // 현재값 curVal --> 선택한값 selVal
    const curVal = oriData[index].PTNTEXAM_STAT
    const selVal = event?.target?.value
    if (curVal === 'N') {
      if (selVal === 'W' || selVal === 'D') {
      } else {
        alert('미실행 상태에서는 대기 이외에는 변경할 수 없습니다!')
        return
      }
    }
    if (curVal === 'W') {
      if (selVal === 'I' || selVal === 'D') {
      } else {
        alert('대기 상태에서는 검사중 이외에는 변경할 수 없습니다!')
        return
      }
    }
    if (curVal === 'I') {
      if (selVal === 'F' || selVal === 'D') {
      } else {
        alert('검사중 상태에서는 완료 이외에는 변경할 수 없습니다!')
        return
      }
    }
    if (curVal === 'F') {
      if (selVal === 'N' || selVal === 'D') {
      } else {
        alert('완료 상태에서는 미실행 이외에는 변경할 수 없습니다!')
        return
      }
    }
    if (curVal === 'D') {
      if (selVal === 'N' || selVal === 'D') {
      } else {
        alert('거부 상태에서는 미실행 이외에는 변경할 수 없습니다!')
        return
      }
    }

    axios
      .post(url, {
        RMCD: PTNTEXAM_RMCD,
        IDNO: PTNTEXAM_IDNO,
        STAT: event?.target?.value,
        RMNUM: PTNTEXAM_RMNUM,
        USERID: localStorage.getItem('ui'),
      })
      .then((response) => {
        console.log(
          `[Inspection.handleSelectChange] response data - `,
          response?.data
        )

        if (response?.data?.code === 'OK') {
          oriData[index].PTNTEXAM_STAT = event?.target?.value
          loadData()
          // 상태값 바꾸면 내려가도록
          handleNameClick(localStorage.getItem('cr'))
        } else {
          alert('오류가 발생하였습니다.\n잠시 후 다시 시도해주세요!')
        }
      })
      .catch((error) => {
        console.log(error.message)
        alert('오류가 발생하였습니다.\n잠시 후 다시 시도해주세요!')
      })
      .finally(() => {
        setRightData(oriData)
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

  // 데이터 출력 되는 부분
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
              rightData.map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <T id="index">{index + 1}</T>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <T id="idno">{row.PTNTEXAM_IDNO}</T>
                      <Box>{}</Box>
                    </TableCell>
                    <TableCell component="th" scope="row" id="name">
                      <T>{row.PTNTINFO_NAME}</T>
                    </TableCell>
                    <TableCell>
                      <T>
                        {row.PTNTINFO_SEX}/{row.PTNTINFO_AGE}
                      </T>
                      <T id="birth">{row.PTNTINFO_BITH}</T>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <T>
                        시작 : {row.PTNTEXAM_STTM}
                        <br />
                        완료 : {row.PTNTEXAM_EDTM}
                      </T>
                    </TableCell>
                    <TableCell component="th" scope="row" className="select">
                      <FormControl className={row.PTNTEXAM_STAT}>
                        <Select
                          displayEmpty
                          value={row.PTNTEXAM_STAT}
                          name="SelectState"
                          onChange={(event) => {
                            handleSelectChange(event, index)
                          }}
                        >
                          <MenuItem value="">
                            <em>선택하세요</em>
                          </MenuItem>
                          {states.map((state, s) => {
                            return (
                              <MenuItem key={s} value={state.state}>
                                {state.label}
                              </MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                )
              })}
            {!rightData?.length && (
              <TableRow className="NoDataBox">
                <td>
                  <TableCell
                    className="NoDataIcon"
                    component="img"
                    src={circleAlert}
                  />
                </td>

                <TableCell className="NoData">
                  로드된 데이터가 없습니다
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
