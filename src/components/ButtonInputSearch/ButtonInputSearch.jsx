import React from 'react'
import InputComonent from '../InputComponent/InputComonent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButttonInputSearch = (props) => {
  const {
    size, placeholder, textButton, backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13, 92, 182)',
    colorTextButton="rgb(10, 104, 255)",
  } = props

  return (
    <div style={{ display: 'flex', }}>
      <InputComonent
        size={size}
        placeholder={placeholder}
        styleBackgroundColor={backgroundColorInput}
      />
      <ButtonComponent
        size={size}
        styleButton={{ backgroundColor: backgroundColorButton}}
        styleTextButon={{ color: colorTextButton}}
        textButton={textButton}
      ></ButtonComponent>
      
    </div>
  )
}

export default ButttonInputSearch