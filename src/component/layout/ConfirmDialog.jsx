import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import classNames from 'classnames'
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from '../../redux'

/**
 * 확인용 대화상자를 제공하는 컴포넌트.
 *
 * @param {React.ComponentProps} props 컴포넌트에 전달된 속성 겍채.
 * @param {Object} props.cancel 취소 버튼 속성.
 * @param {Function} props.cancel.action 취소 버튼 액션.
 * @param {String} [props.cancel.label='취소'] 취소 버튼 라벨.
 * @param {String} [props.className] 확인용 대화상자에 적용할 스타일시트 클래스명.
 * @param {React.Component|String} [props.contents] 확인용 대화상자 내용.
 * @param {Object} props.ok 확인 버튼 속성.
 * @param {Function} props.ok.action 확인 버튼 액션.
 * @param {String} [props.ok.label='확인'] 확인 버튼 라벨.
 * @param {String} [props.title] 확인용 대화상자 제목.
 * @returns {React.Component} 확인용 대화상자 컴포넌트.
 */
const ConfirmDialog = (props) => {
  const { cancel, className, contents, ok, title } = props
  const [open, setOpen] = useState(true)
  const clsConfirmDialog = classNames('ConfirmDialog', className)

  // 기본 버튼 라벨
  if (cancel && !cancel.label) cancel.label = '취소'
  if (ok && !ok.label) ok.label = '확인'

  /**
   * 확인용 대화상자 닫기.
   */
  const close = () => {
    setOpen(false)
    closeConfirmDialog()
  }

  /**
   * 취소 버튼 클릭시 실행할 핸들러.
   *
   * @param {React.SyntheticEvent} eve 이벤트.
   */
  const handleCancel = (eve) => {
    if (cancel && typeof cancel.action === 'function') cancel.action(eve)
    close()
  }

  /**
   * 확인 버튼 클릭시 실행할 핸들러.
   *
   * @param {React.SyntheticEvent} eve 이벤트.
   */
  const handleOK = (eve) => {
    if (ok && typeof ok.action === 'function') ok.action(eve)
    close()
  }

  return (
    <Dialog
      className={clsConfirmDialog}
      disableEscapeKeyDown
      maxWidth="xs"
      open={open}
    >
      {title && (
        <DialogTitle className="ConfirmDialogTitle">{title}</DialogTitle>
      )}
      {contents && (
        <DialogContent className="ConfirmDialogContents">
          {contents}
        </DialogContent>
      )}
      <DialogActions className="ConfirmDialogButtons">
        {cancel && (
          <Button className="ButtonCancel" onClick={handleCancel}>
            {cancel.label}
          </Button>
        )}
        {ok && (
          <Button className="ButtonOK" onClick={handleOK}>
            {ok.label}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

const className = 'ConfirmDialogContainer'
let rootForConfirmDialog = null

/**
 * 확인용 대화상자 닫기.
 */
const closeConfirmDialog = () => {
  let ele = document.querySelector(`.${className}`)
  if (ele) {
    if (rootForConfirmDialog) rootForConfirmDialog.unmount()
    rootForConfirmDialog = null
    ele.parentNode.removeChild(ele)
  }
}

/**
 * 확인용 대화상자 열기.
 *
 * @param {React.ComponentProps} props 컴포넌트에 전달된 속성 겍채.
 */
const openConfirmDialog = (props) => {
  if (!props?.ok && !props?.cancel) return

  let ele = document.querySelector(`.${className}`)
  if (!ele) {
    ele = document.createElement('div')
    ele.className = className
    document.body.appendChild(ele)
  }

  rootForConfirmDialog = createRoot(ele)
  rootForConfirmDialog.render(
    <Provider store={store}>
      <ConfirmDialog {...props} />
    </Provider>
  )
}

export { closeConfirmDialog, ConfirmDialog, openConfirmDialog }
