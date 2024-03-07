import { Input } from 'antd'
import React from 'react'

const InputComonent = ({size,placeholder,styleBackgroundColor,borderRadius="false", ...rests}) => {
  return (
    <Input
        size={size}
        placeholder={placeholder}
        style={{ backgroundColor: styleBackgroundColor}}
      />
  )
}

export default InputComonent