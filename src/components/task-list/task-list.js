import React, { Component, useEffect, useState } from "react";
import Task from '../task';
import axios from "../../api/axios";

const defaultTasks = [
    {
        title: 'Do shopping',
        completed: false,
        category: 'personal',
        description: 'Este es el body de la task y me puedo explayar más',
        tags: ["Programación"]
    },
    {
        title: 'Meet Steve',
        completed: true,
        category: 'estudio',
        description: 'Este es el body de la task y me puedo explayar más',
        tags: ["Ocio"]
    }

]

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

    useEffect(() => {
        axios.get('/task')
          .then(function (response) {
            setTasks(response.data)
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })

      }, []);

    const taskList = tasks.map((task, index) => <Task 
        completed={task.completed} 
        title={task.title} 
        category={task.category}
        description={task.description}
        tags={task.tags}
        key={index}
        />
    )
    return <div id='task-list'> {taskList} </div>;
}

export default TaskList;
