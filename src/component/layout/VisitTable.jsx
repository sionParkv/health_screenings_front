import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { ConfirmDialog } from './ConfirmDialog'

const url =
  'https://d0b6cdf5-44e7-4257-9b15-0215601c9566.mock.pstmn.io/api/visit'
// const url = 'http://localhost:4000/api/test'

const VisitTable = (props) => {
  const [page] = useState(0)
  const [rowsPerPage] = useState(5)
  const [data, setData] = useState([])
  const loadData = () => {
    axios.post(url).then((response) => {
      const res = response?.data?.data || []
      setData(res)
    })
  }

  useEffect(() => {
    loadData()
  }, [page])

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.length) : 0

  const [propsDialog, setPropsDialog] = useState({
    content: '',
    isOpen: false,
    ok: { action: () => closeDialog(), label: '' },
    title: '',
  })
  const closeDialog = () => setPropsDialog({ ...propsDialog, isOpen: false })

  const handleClickOpen = () => {
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
  let nameResult = []
  let ageResult = []
  let resultSearch = []

  resultSearch = data?.filter((row) => {
    let ok = true

    ok = row?.test2.includes(props.value)

    return ok
  })
  nameResult = data.sort(function (a, b) {
    let x = a.name.toLowerCase()
    let y = b.name.toLowerCase()
    if (x < y) {
      return -1
    }
    if (x > y) {
      return 0
    }
  })
  console.log(nameResult)

  ageResult = data.sort(function (a, b) {
    return a.patno - b.patno
  })

  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: 960 }}
      className="VisitPage"
    >
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {resultSearch.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" id="test">
                {row.test}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.patno}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.patinfo}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.rrn}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.package}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.test2}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <Button onClick={handleClickOpen}>번호표발행</Button>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ConfirmDialog {...propsDialog} />
    </TableContainer>
  )
}
export { VisitTable }
