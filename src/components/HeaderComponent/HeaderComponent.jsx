import React from 'react'
import { WrapperHeader,WrapperTextHeader,WrapperAccountHeader,WrapperTextHeaderSmall } from './style'
import { Col } from 'antd'
import {
  UserOutlined,
  ShoppingCartOutlined,
  HomeOutlined
} from '@ant-design/icons';
import ButttonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={3}>
          <WrapperTextHeader>Rex-T Store</WrapperTextHeader>
        </Col>
        <Col span={15}>
          <ButttonInputSearch
              size="large"
              placeholder="input search text"
              textButton="Tìm kiếm"
              backgroundColorButton="#fff"
              // onChange={onSearch}
              colorText="rgb(10, 104, 255)"
            />
        </Col>
        <Col span={6} style={{display:'flex', gap:'20px', paddingLeft:'20px'}}>
          <WrapperAccountHeader>
            <HomeOutlined style={{fontSize:'25px', color:'#fff'}}/>
            <WrapperTextHeaderSmall>Trang Chu</WrapperTextHeaderSmall>
          </WrapperAccountHeader>

          <WrapperAccountHeader>
            <UserOutlined style={{fontSize:'25px'}}/>
            <WrapperTextHeaderSmall>Tai Khoan</WrapperTextHeaderSmall>
          </WrapperAccountHeader>
          <div>
            <ShoppingCartOutlined style={{fontSize:'25px', color:'#fff'}}/>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent