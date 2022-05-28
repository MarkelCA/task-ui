import React, { Component, useEffect, useState } from "react";
import Task from '../task';
import axios from "../../api/axios";

const TaskList = ({completed}) => {
    const [tasks, setTasks] = useState([])
    const route = completed ? '/history' : '/tasks'

    useEffect(() => {
        axios.get(route)
          .then(function (response) {
            setTasks(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })

      }, [completed]);

    const taskList = tasks.map((task) => <Task 
        task={task}
        key={task.id}
        />
    )
    return <div id='task-list'> {taskList} </div>;
}

export default TaskList;
