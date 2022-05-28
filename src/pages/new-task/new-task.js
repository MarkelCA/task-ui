import React, { Component } from "react";
import NewTaskForm from '../../components/new-task-form'
import {PageHeader} from "antd";
import { useNavigate } from "react-router-dom";


const NewTask = () => {
    const navigate = useNavigate();
    return <div>
    <PageHeader
        className="site-page-header"
        onBack={() =>   navigate('/', {replace : true})}
        title="New Task"
        subTitle="Let's be productive!"
      />
        <NewTaskForm/>
        </div>;
}

export default NewTask;
