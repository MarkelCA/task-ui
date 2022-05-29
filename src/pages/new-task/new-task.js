import React from "react";
import {PageHeader} from "antd";
import { useNavigate } from "react-router-dom";
import TaskForm from "../../components/task-form";


const NewTask = () => {
    const navigate = useNavigate();
    return <div>
    <PageHeader
        className="site-page-header"
        onBack={() =>   navigate('/', {replace : true})}
        title="New Task"
        subTitle="Let's be productive!"
      />
        <TaskForm/>
        </div>;
}

export default NewTask;
