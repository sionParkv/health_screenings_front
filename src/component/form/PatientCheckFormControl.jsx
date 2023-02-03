import { FormControl, FormControlLabel, Input } from '@mui/material'
import React from 'react'

/**
 * @type {object} 환자 정보 확인용 폼 컨트롤러 유형.
 * @property {object} birth 생년월일 입력 컨트롤러.
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
 * @param {string} props.id 필드 요소(&lt;input /&gt;)에 사용할 id/name 속성.
 * @param {number} props.maxLength 필드 요소(&lt;input /&gt;)의 최대 입력값으로 사용할 속성.
 * @param {string} props.placeholder 필드 요소(&lt;input /&gt;)의 입력 힌트로 사용할 속성.
 * @param {string} props.type 필드 요소(&lt;input /&gt;)의 유형으로 사용할 속성.
 * @returns {React.Component} 입력 필드 컴포넌트.
 */
const InputField = (props) => {
  const { id, maxLength, placeholder, type } = props
  const handleChange = (eve) => {
    const ele = eve?.target
    if (!ele) return
    const val = ele.value

    if (id.indexOf('birth') > -1 && val.length > 6) {
      ele.value = val.substr(0, 6)
    }
    console.log(ele.value)
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
 * @param {string} props.type 환자 정보 확인용 폼 컨트롤러 유형.
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
