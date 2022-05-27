import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { FileOutlined, PieChartOutlined, UserOutlined, TeamOutlined, DesktopOutlined, BookOutlined, CheckOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import {Typography} from "antd";
import { useState } from 'react';
import CreateTaskBox from './components/create-task-box'
import TaskList from './components/task-list'
const { Header, Content, Footer, Sider } = Layout;
const {Title} = Typography

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Personal', '1', <UserOutlined />),
  getItem('Estudios', '2', <BookOutlined />),
  getItem('Files', '9', <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        ><Title style={{color:'white', textAlign:'center'}}><CheckOutlined style={{position:'relative', bottom:'8px'}}/>  Task</Title></Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
              <CreateTaskBox/>
              <TaskList/>

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
    
}


export default App;
