import React, { Component } from "react";
import { Layout, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
const { Header } = Layout
const {Title} = Typography

const SiteHeader = () => {
    return  <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
            <Title style={{color:'white', textAlign:'center'}}><CheckOutlined style={{position:'relative', bottom:'8px'}}/>  Task</Title>

        </Header>
}

export default SiteHeader;
