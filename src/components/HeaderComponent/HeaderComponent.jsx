import React from 'react'
import { WrapperHeader,WrapperTextHeader,WrapperAccountHeader,WrapperTextHeaderSmall } from './style'
import { Col } from 'antd'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
  HomeOutlined
} from '@ant-design/icons';
import ButttonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={25}>
        <Col span={2}>
          <WrapperTextHeader>Rex-T Store</WrapperTextHeader>
        </Col>
        <Col span={16}>
          <ButttonInputSearch
              size="large"
              bordered={false}
              textbutton="Tìm kiếm"
              placeholder="input search text"
              // onChange={onSearch}
              backgroundColorButton="#5a20c1"
            />
        </Col>
        <Col span={6} style={{display:'flex', gap:'20px'}}>
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