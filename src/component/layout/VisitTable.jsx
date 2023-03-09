import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'

import { ConfirmDialog } from './ConfirmDialog'
import { selectors } from '../../data/selectors'
import moment from 'moment/moment'

const VisitTable = (props) => {
  const { sort, type } = props
  const { sorts, types } = selectors
  const [loadedData, setLoadedData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const url = 'http://192.168.1.98:4000/api/visit'

  // 서버에서 데이터 가져오는 부분
  const loadData = () => {
    axios.get(url).then((response) => {
      let resultData = response?.data?.data || []
      setLoadedData(resultData)
      resultData = setDataType(resultData)
      setDataSort(resultData)
      console.log(resultData)
    })
  }

  // 종합, 일반 구분 필터
  const setDataType = (data) => {
    let selectedType = types.find((item) =>
      item.where === type ? true : false
    )

    if (selectedType.where === 'All') {
      return data
    }

    return data.filter((item) => {
      return selectedType.label.includes(item.GUBUN) ? true : false
    })
  }

  // 이름별, 환자구분별 필터
  const setDataSort = (data) => {
    let selectedSort = sorts.find((item) =>
      item.order === sort ? true : false
    )

    let dataSort = []
    const orders = selectedSort.order.split('_')
    if (orders[0].includes('NAME')) {
      dataSort = data.sort((a, b) => {
        if (a.PMSSPTNAM < b.PMSSPTNAM) {
          return orders[1] === 'ASC' ? -1 : 1
        } else if (a.PMSSPTNAM > b.PMSSPTNAM) {
          return orders[1] === 'ASC' ? 1 : -1
        } else {
          return 0
        }
      })
    } else if (orders[0].includes('NUMBER')) {
      dataSort = data.sort((a, b) => {
        if (a.PMSSPTCNO < b.PMSSPTCNO) {
          return orders[1] === 'ASC' ? -1 : 1
        } else if (a.PMSSPTCNO > b.PMSSPTCNO) {
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

  // 번호표 발행 팝업
  const [propsDialog, setPropsDialog] = useState({
    content: '',
    isOpen: false,
    ok: { action: () => closeDialog(), label: '' },
    title: '',
  })
  const closeDialog = () => setPropsDialog({ ...propsDialog, isOpen: false })

  // 번호표 발행 클릭 이벤트
  const handleClickOpen = (event, index) => {
    const oriData = [...sortedData]
    console.log('>>>>> ', oriData[index])
    const url = 'http://192.168.1.98:4000/api/visit/ticket'
    const { PMSSPTCNO, PMSSPTNAM, GUBUN } = oriData[index]

    const requestData = {
      IDNO: PMSSPTCNO,
      NAME: PMSSPTNAM,
      BSTP: GUBUN === '종합' ? 100 : 200,
      ZONE: GUBUN === '종합' ? 'Z1000' : 'Z1001',
    }
    console.log(`[Patient.handleSelectChange] request data: `, requestData)

    axios
      .post(url, requestData)
      .then((response) => {
        console.log(
          `[VisitTicket.handleSelectChange] response data - `,
          response?.data
        )

        if (response?.data?.code === 'OK') {
          oriData[index].PTNTEXAM_STAT = event?.target?.value
        } else {
          // alert('오류가 발생하였습니다.\n잠시 후 다시 시도해주세요!')
        }
      })
      .catch((error) => {
        console.log(error.message)
        // alert('오류가 발생하였습니다.\n잠시 후 다시 시도해주세요!')
      })
      .finally(() => {
        setSortedData(oriData)
      })

    const today = moment().format('YYYY년 M월 D일 H시 m분')

    setPropsDialog({
      ...propsDialog,
      title: (
        <>
          <strong>대기번호</strong> <br />
          <div className="WaitNum">003</div>
        </>
      ),
      className: 'Ticket-dialog',
      content: (
        <>
          <strong className="WaitPerson">대기인수 : 01 명</strong>
          <br />
          {today}
        </>
      ),
      isOpen: true,
      ok: {
        label: '확인',
        action: () => {
          closeDialog()
        },
      },
    })
  }

  // console.log('@@@@@ ', sortedData[0])

  // 출력되는 테이블
  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: 960 }}
      className="VisitPage"
    >
      <Table sx={{ minWidth: 500 }}>
        <TableBody>
          {!!sortedData?.length &&
            sortedData?.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" id="test">
                  V
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {index + 1}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center" id="name">
                  {row.GUBUN}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.PMSSPTNAM}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.PMSSPTCNO}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center" id="type">
                  {row.PMSSBIRDT}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center" id="ticket">
                  <Button
                    onClick={(event) => {
                      handleClickOpen(event, index)
                    }}
                  >
                    번호표발행
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          {!sortedData?.length && (
            <TableRow>
              <TableCell className="NoData">
                로드된 데이터가 없습니다.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ConfirmDialog {...propsDialog} />
    </TableContainer>
  )
}
export { VisitTable }
