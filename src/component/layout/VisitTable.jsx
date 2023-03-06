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

const url = 'http://192.168.1.98:4000/api/visit'

const VisitTable = (props) => {
  const { sort, type } = props
  const { sorts, types } = selectors
  const [loadedData, setLoadedData] = useState([])
  const [sortedData, setSortedData] = useState([])

  const loadData = () => {
    axios.get(url).then((response) => {
      let resultData = response?.data?.data || []
      setLoadedData(resultData)
      resultData = setDataType(resultData)
      setDataSort(resultData)
      console.log(resultData)
    })
  }

  const setDataType = (data) => {
    let selectedType = types.find((item) =>
      item.where === type ? true : false
    )

    if (selectedType.where === 'All') {
      return data
    }

    return data.filter((item) => {
      return selectedType.label.includes(item.PKFGNAME) ? true : false
    })
  }

  const setDataSort = (data) => {
    let selectedSort = sorts.find((item) =>
      item.order === sort ? true : false
    )

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

  const [propsDialog, setPropsDialog] = useState({
    content: '',
    isOpen: false,
    ok: { action: () => closeDialog(), label: '' },
    title: '',
  })
  const closeDialog = () => setPropsDialog({ ...propsDialog, isOpen: false })

  // 번호표 발행 팝업
  const handleClickOpen = (event, index) => {
    const oriData = [...sortedData]

    const url = 'http://192.168.1.98:4000/api/visit/ticket'
    const {
      HCAVBSNS_IDNO,
      HCAVBSNS_NAME,
      HCAVBSNS_ISID,
      HCAVBSNS_ZONE,
      HCAVBSNS_BSTP,
      HCAVSUGI_NUMB,
      HCAVISSUE_GB,
      HCAVBSNS_TEMP,
    } = sortedData[index]
    // console.log(
    //   `[Patient.handleSelectChange] request data - RMCD: ${PTNTEXAM_RMCD} IDNO: ${PTNTEXAM_IDNO} STAT: ${
    //     event?.target?.value
    //   } RMNUM: ${PTNTEXAM_RMNUM} USERID: ${localStorage.getItem('ui')}`
    //)

    axios
      .post(url, {
        IDNO: HCAVBSNS_IDNO,
        NAME: HCAVBSNS_NAME,
        ISID: HCAVBSNS_ISID,
        ZONE: HCAVBSNS_ZONE,
        BSTP: HCAVBSNS_BSTP,
        NUMB: HCAVSUGI_NUMB,
        GB: HCAVISSUE_GB,
        TEMP: HCAVBSNS_TEMP,
      })
      .then((response) => {
        console.log(
          `[VisitTicket.handleSelectChange] response data - `,
          response?.data
        )

        if (response?.data?.code === 'OK') {
          oriData[index].PTNTEXAM_STAT = event?.target?.value
        } else {
          alert('오류가 발생하였습니다.\n잠시 후 다시 시도해주세요!')
        }
      })
      .catch((error) => {
        console.log(error.message)
        alert('오류가 발생하였습니다.\n잠시 후 다시 시도해주세요!')
      })
      .finally(() => {
        setSortedData(oriData)
      })
    // setOpen(true)
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
          <strong className="WaitPerson">대기인수 : 03 명</strong>
          <br />
          2023년 2월 17일 10시 10분
        </>
      ),
      isOpen: true,
      ok: {
        label: '확인',
        action: () => {
          // TODO 프로그램 종료 액션
          closeDialog()
        },
      },
    })
  }

  // console.log('@@@@@ ', sortedData[0])
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
                  <Button onClick={handleClickOpen}>번호표발행</Button>
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
