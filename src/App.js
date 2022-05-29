import React from 'react';
import 'antd/dist/antd.min.css';
import './index.css';
import {  UserOutlined, BookOutlined, CheckOutlined, HeartOutlined, CalendarOutlined, UnorderedListOutlined, HomeOutlined,CheckCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import { Link } from "react-router-dom";
import { useState } from 'react';
import CreateTaskBox from './components/create-task-box'
import Tasks from './pages/tasks'
import EditTask from './pages/edit-task'
import Home from './pages/home'
import NewTask from './pages/new-task/new-task';
const { Header, Content, Footer, Sider } = Layout;
const {Title} = Typography
const { SubMenu } = Menu;


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
      <BrowserRouter>
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
            <Menu.Item key="home">
                 <HomeOutlined/>
                <span>Home</span>
                <Link to="/" />
          </Menu.Item>
            <Menu.Item key="new-task">
                <PlusOutlined />
                <span>New task</span>
                <Link to="/new-task" />
          </Menu.Item>
            <Menu.Item key="tasks">
                <CheckCircleOutlined />
                <span>Tasks</span>
                <Link to="/tasks" />
          </Menu.Item>
        <SubMenu
            key="sub1"
            title={
              <span>
                <UnorderedListOutlined />
                <span>Categories</span>
              </span>
            }
          >
            <Menu.Item key="personal">
                 <UserOutlined/>
                <span>Personal</span>
                <Link to="/tasks/personal" />

            </Menu.Item>
            <Menu.Item key="study">
                <BookOutlined/>
                <span>Study</span>
                <Link to="/tasks/study" />
            </Menu.Item>
          </SubMenu>
            <Menu.Item key="History">
                 <CalendarOutlined/>
                <span>History</span>
                <Link to="/history" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        ><Title style={{color:'white', textAlign:'center'}}><CheckOutlined style={{position:'relative', bottom:'8px'}}/>  Task</Title>

        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              margin: 'auto'
            }}
          >

              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/new' element={<CreateTaskBox />} />
                  <Route path='/tasks' element={<Tasks completed={false}/>} />
                  <Route path='/history' element={<Tasks completed={true}/>} />
                  <Route path='/new-task' element={<NewTask/>} />
                  <Route path='/task/:id' element={<EditTask/>} />
                <Route path="*" element={<Home />} />
              </Routes>

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >

            Made with <HeartOutlined /> by <a href='https://github.com/MarkelCA'>Markel Cuesta</a>
        </Footer>
      </Layout>
    </Layout>
          </BrowserRouter>
  )
    
}


export default App;
