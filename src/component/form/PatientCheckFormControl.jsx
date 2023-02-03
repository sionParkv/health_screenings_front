import { FormControl, FormControlLabel, Input } from '@mui/material'
import React from 'react'

/**
 * @type {Object} 환자 정보 확인용 폼 컨트롤러 유형.
 * @property {Object} birth 생년월일 입력 컨트롤러.
 */
const ControlTypes = {
  birth: {
    id: 'birth',
    label: '생년월일',
    maxLength: 6,
    placeholder: '예) 701221',
    type: 'number',
  },
}

/**
 * 입력 필드를 제공하는 컴포넌트.
 *
 * @param {React.ComponentProps} props 컴포넌트에 전달된 속성 겍채.
 * @param {String} props.id 필드 요소(&lt;input /&gt;)에 사용할 id/name 속성.
 * @param {Number} props.maxLength 필드 요소(&lt;input /&gt;)의 최대 입력값으로 사용할 속성.
 * @param {String} props.placeholder 필드 요소(&lt;input /&gt;)의 입력 힌트로 사용할 속성.
 * @param {String} props.type 필드 요소(&lt;input /&gt;)의 유형으로 사용할 속성.
 * @returns {React.Component} 입력 필드 컴포넌트.
 */
const InputField = (props) => {
  const { id, maxLength, placeholder, type } = props

  /**
   * 입력 필드의 값이 변경될 경우 실행할 핸들러.
   * 사용자 입력 값을 핸들링하기 위해 사용.
   *
   * @param {React.SyntheticEvent} eve 이벤트.
   */
  const handleChange = (eve) => {
    const ele = eve?.target
    if (!ele) return
    const val = ele.value

    // 생년월일 입력 필드일 경우 글자 수 제한
    // <input type="number" />일 경우 maxlength가 동작하지 않으므로 직접 처리
    if (id.indexOf('birth') > -1 && val.length > 6) {
      ele.value = val.substr(0, 6)
    }
  }

  return (
    <Input
      fullWidth
      id={id}
      inputProps={{ maxLength }}
      name={id}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
    />
  )
}

/**
 * 환자 정보 확인용 폼 컨트롤러를 제공하는 컴포넌트.
 *
 * @param {React.ComponentProps} props 컴포넌트에 전달된 속성 겍채.
 * @param {String} props.type 환자 정보 확인용 폼 컨트롤러 유형.
 * * `'birth'`: 생년월일 입력 컨트롤러.
 * @returns {React.Component} 환자 정보 확인을 위한 폼 컨트롤러 컴포넌트.
 */
const PatientCheckFormControl = (props) => {
  if (!props?.type) return

  const properties = ControlTypes[props?.type]
  const { label } = properties

  return (
    <FormControl className="PatientCheckFormControl" fullWidth>
      <FormControlLabel
        control={<InputField {...properties} />}
        label={label}
        labelPlacement="start"
      />
    </FormControl>
  )
}

export { PatientCheckFormControl }
