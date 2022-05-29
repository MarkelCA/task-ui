import React, { Component } from "react";
import { Layout } from "antd";
import {  HeartOutlined, } from '@ant-design/icons';
const {Footer} = Layout

const SiteFooter = () => {
    return (
        <Footer style={{ textAlign: 'center', }} >
            Made with <HeartOutlined /> by <a href='https://github.com/MarkelCA'>Markel Cuesta</a>
        </Footer>
    );
}

export default SiteFooter;
