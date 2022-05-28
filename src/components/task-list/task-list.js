import React, { Component, useEffect, useState } from "react";
import Task from '../task';
import axios from "../../api/axios";

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('/task')
          .then(function (response) {
            setTasks(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })

      }, []);

    const taskList = tasks.map((task) => <Task 
        task={task}
        key={task.id}
        />
    )
    return <div id='task-list'> {taskList} </div>;
}

export default TaskList;
