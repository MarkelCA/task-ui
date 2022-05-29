import React, { useEffect, useState } from "react";
import TaskForm from '../../components/task-form'
import {PageHeader} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";

const EditTask = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState()
    const {id} = useParams()
    
    useEffect(() => {
        axios.get(`/tasks/${id}`)
          .then(function (response) {
              setTask(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })

      }, [id]);

    return <div>
    <PageHeader
        className="site-page-header"
        onBack={() =>   navigate('/', {replace : true})}
        title="EditTask"
        subTitle="Change of plans?"
      />
        <TaskForm task={task}/>
        </div>;
}

export default EditTask;
