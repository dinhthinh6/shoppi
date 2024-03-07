import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({size,styleButon, styleTextButon, textButton,...rest}) => {
  return (
    <Button
        size={size}
        style={styleButon}
    >
      <span style={styleTextButon}>{textButton}</span>
    </Button>
  )
}

export default ButtonComponent