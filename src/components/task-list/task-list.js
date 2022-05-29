import React, { useEffect, useState } from "react";
import Task from '../task';
import axios from "../../api/axios";

const TaskList = ({completed}) => {
    const [tasks, setTasks] = useState([])
    const [rerender, setRerender] = useState(false)
    const route = completed ? '/history' : '/tasks'

    useEffect(() => {
        axios.get(route)
          .then(function (response) {
            setTasks(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })

      }, [route, rerender]);

    return <div id='task-list'>
            {tasks.map((task) => <Task task={task} key={task.id} rerender={rerender} setRerender={setRerender}/>)}
        </div>;
}

export default TaskList;
