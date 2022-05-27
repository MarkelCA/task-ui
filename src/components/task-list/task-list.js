import React, { Component, useEffect } from "react";
import Task from '../task';

const tasks = [
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

const TaskList = ({tasks, setTasks}) => {
    useEffect(() => {
        setTasks(tasks)
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
    return <div id='task-list'>{taskList}</div>;
}

export default TaskList;
