import { Button, Input } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

const ButttonInputSearch = (props) => {
  const {
    size, placeholder, textbutton,
    bordered, backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13, 92, 182)',
    colorButton = '#fff'
  } = props

  return (
    <div style={{ display: 'flex', }}>
      <Input
        size={size}
        placeholder={placeholder}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <Button
        size={size}
        style={{ background: backgroundColorButton, border: !bordered && 'none' }}
        icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
      ><span style={{color:colorButton}}>{textbutton}</span></Button>
      
    </div>
  )
}

export default ButttonInputSearch