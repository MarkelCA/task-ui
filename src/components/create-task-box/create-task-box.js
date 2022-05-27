import React, {useState} from "react";
import { CheckCircleOutlined } from '@ant-design/icons';
import Task from "../task/task";
import { message } from "antd";
import { Button } from "antd";
import {Typography} from "antd";
const {Title} = Typography

const CreateTaskBox = ({tasks, setTasks}) => {

    const addTask = () => {
        message.info("New Task!")
        setTasks([...tasks, {
            title: '',
            completed: false,
            category: 'personal',
            description: '',
            tags: []
        }])
    }
    
    return <div className="task" style={{marginTop: '1em',marginBottom: '1em'}}>
        <Button type='primary' 
            style={{borderRadius: '20px', width:'100%', textAlign:'left'}}
            onClick={addTask}>
            <CheckCircleOutlined/>Create new Task
        </Button>
    </div>;
}

export default CreateTaskBox;
