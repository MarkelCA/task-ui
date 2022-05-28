import React, { Component, useState } from "react";
import 'antd/dist/antd.css';
import './new-task-form.css'
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
const { RangePicker } = DatePicker;
const {Option} = Select

const NewTaskForm = () => {

    const onChange = (value, dateString) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    };
    const tailLayout = {
      wrapperCol: {
        offset: 4,
      },
    };
    const onOk = (value) => {
      console.log('onOk: ', value);
    };
    return <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      <Form.Item label="Title">
        <Input />
      </Form.Item>
      <Form.Item label="Category">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Date">
         <DatePicker showTime onChange={onChange} onOk={onOk} />
      </Form.Item>
      <Form.Item label="Tags">

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
      </Form.Item>
      <Form.Item label="Completed" valuePropName="checked">
        <Switch />
      </Form.Item>
        <Form.Item {...tailLayout} >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
}

export default NewTaskForm;
