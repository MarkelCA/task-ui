import React, {useState} from "react";
import {Button, Input, Select, message } from 'antd'
import {Row, Col, Divider}  from 'antd'
import { Typography, Space } from "antd";
import { CheckCircleOutlined } from '@ant-design/icons';
const {Title, Text, Paragraph} = Typography


const CreateTaskBox = () => {
    const [editar, setEditar]=useState('Edit this task')
    const [taskContent, setTaskContent]=useState({
        input: ''
    })

    const {Option} = Select

    const testSelect = (
        <Select defaultValue="personal">
            <Option value="personal">Personal</Option>
            <Option value="profesional">Profesional</Option>
            <Option value="estudio">Estudio</Option>
        </Select>
    )

    
    const handleChange = e => {
        const {name, value} = e.target
        setTaskContent({ ...taskContent, [name]:value })
        console.log(taskContent)
    }

    return <div id="create-task-box">
        <Title level={5}>Create new Task</Title>

        <Space direction="vertical">
             <Text>aoeuaouoeauaouao</Text>
             <Text type="secondary">G2o</Text>
             <Text delete>This task is completed</Text>
        </Space>

        <Paragraph editable={{onChange: setEditar}}>
            {editar}
        </Paragraph>

        <Input placeholder="This is an Input" size="large" prefix={ <CheckCircleOutlined/> }/>
        <Input addonBefore={testSelect} placeholder="This is an Input" size="large" prefix={ <CheckCircleOutlined/> }/>


         <Button type="secondary"  
             onClick={() => { message.success('Nice!')} }>
             Button message
        </Button>

        <Select
            showSearch 
            mode="multiple" 
            style={{width: "100%"}}
            placeholder="Choose the tags"
        >
            <Option value="programacion">Programacion</Option>
            <Option value="recados">Recado</Option>
            <Option value="ocio">Ocio</Option>
        </Select>

        <Divider>1 col 24</Divider>
        <Row>
            <Col span={24} style={{backgroundColor: 'green', color: 'white'}}>columna</Col>
        </Row>
        <Divider>2 cols 12</Divider>
        <Row gutter={16}>
            <Col span={10} style={{backgroundColor: 'blue', color: 'white'}}>columna</Col>
            <Col span={10} style={{backgroundColor: 'blue', color: 'white'}}>columna</Col>
        </Row>
        <Divider>3 cols 8</Divider>
        <Row>
            <Col span={8} style={{backgroundColor: 'orange', color: 'white'}}>columna</Col>
            <Col span={8} style={{backgroundColor: 'orange', color: 'white'}}>columna</Col>
            <Col span={8} style={{backgroundColor: 'orange', color: 'white'}}>columna</Col>
        </Row>

    </div>;
}


export default CreateTaskBox;
