import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MyContent() {
  return (
    <Content
           style={{padding:'24px', background:'#fff'}}
          >
     <Outlet />
     </Content>  )
}
