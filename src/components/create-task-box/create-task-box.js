import React, {useState} from "react";
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from "antd";
import {Typography} from "antd";

const CreateTaskBox = () => {
    
    const createTask = () => { }

    return <div className="task" style={{marginTop: '1em',marginBottom: '1em'}}>
        <Button type='primary' 
            style={{borderRadius: '20px', width:'100%', textAlign:'left'}}
            onClick={createTask}>
            <CheckCircleOutlined/>Create new Task
        </Button>
    </div>;
}

export default CreateTaskBox;
