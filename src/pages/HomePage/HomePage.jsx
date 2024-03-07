import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'

const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'Lap top']
    return(
        <div style={{ padding: '0 60px'}}>
            <WrapperTypeProduct>
                {arr.map((item) =>{
                    return(
                        <TypeProduct name={item} key={item}/>
                    )
                })}
            </WrapperTypeProduct>
            HomePage
        </div>
        
    )
}

export default HomePage