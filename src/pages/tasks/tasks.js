import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import {PageHeader} from "antd";
import TaskList from "../../components/task-list/task-list";

const Tasks = () => {
    const navigate = useNavigate();
    return <div>
<PageHeader
    className="site-page-header"
    onBack={() =>   navigate('/', {replace : true})}
    title="Tasks"
    subTitle="See what you have to do today."
  />
        <TaskList/>
        </div>;
}

export default Tasks;
