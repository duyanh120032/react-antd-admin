import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Sider, Content } = Layout
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="min-h-[100vh]">
        <div className=" m3 bg-blueGray h-8" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        >

        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="p-0 text-white">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'w-8 h-8 text-white text-xl',
              onClick: () => setCollapsed(!collapsed),
            },
          )}
        </Header>
        <Content
          className="p2"
        >
          <Outlet />
        </Content>

      </Layout>

    </Layout>
  )
}

export default DefaultLayout
