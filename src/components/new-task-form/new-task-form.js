import React, { Component, useState, useEffect } from "react";
import 'antd/dist/antd.css';
import './new-task-form.css'
import axios from "../../api/axios";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
const { RangePicker } = DatePicker;
const {Option} = Select

const NewTaskForm = () => {
    const [tags, setTags] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('/tags')
          .then(function (response) {
            setTags(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })

        axios.get('/categories')
          .then(function (response) {
            setCategories(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })

      }, []);

    const createTask = (values) => {
        let date = values.date
        if(date)
            date = date.format('X')

        axios.post('/tasks', values)
          .then(function (response) {
              message.info("New task created!")
          })
          .catch(function (error) {
              message.error("Couldn't create the task")
            console.log(error);
          });

    }

    const tailLayout = {
      wrapperCol: {
        offset: 4,
      },
    };
    return <Form onFinish={createTask}
        initialValues={{
            category:'personal',
            description:'',
            date:'',
            tags:[],
            completed: false
        }}
        name ='new-task-form'
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
        <Form.Item name="title" label="Title" required >
            <Input  allowClear required={true} message='aoeu'/>
      </Form.Item>
      <Form.Item name='description' label="Description">
        <Input allowClear />
      </Form.Item>
      <Form.Item name='category' label="Category" required={true}>
        <Select allowClear required={true} >
            {categories.map((category) => <Select.Option key={category.machine_name}  value={category.machine_name}>{category.fullName}</Select.Option> )}
        </Select>
      </Form.Item>
      <Form.Item name='date' label="Date">
         <DatePicker showTime />
      </Form.Item>
      <Form.Item name='tags' label="Tags">

        <Select
            showSearch 
            mode="multiple" 
            style={{width: "100%"}}
            placeholder="Choose the tags"
        >
            {tags.map((tag) => <Select.Option key={tag.id} value={tag.id}>{tag.tagName}</Select.Option> )}
        </Select>
      </Form.Item>
      <Form.Item name='completed' label="Completed" valuePropName="checked">
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
