import React from "react";
import { Row, Col, Checkbox, Button } from "antd";
import {EditOutlined, UnorderedListOutlined, CalendarOutlined, TagOutlined} from '@ant-design/icons';
import { Collapse } from 'antd';
import {Typography} from "antd";
import { message } from "antd";
import axios from "../../api/axios";
import moment from 'moment'
import { useNavigate } from "react-router-dom";
const {Paragraph} = Typography
const { Panel } = Collapse;

const Task = ({task, rerender, setRerender}) => {
    const navigate = useNavigate();

    const completeTask = (event) => {
            event.stopPropagation()
            axios.put(`/tasks/${task.id}`, {
                id:task.id,
                ...task,
                completed: !task.completed,
                category: task.category.machine_name,
                tags: task.tags ? task.tags.map((tag) => tag.id) : []
            })
                .then(() => {
                    const completed = !task.completed
                    if(completed) message.success("Task completed!")
                    else message.info("Task restored")
                    setRerender(!rerender)
              })
              .catch(function (error) {
                  message.error("Couldn't update the task")
                  console.log(error);
              });
   }

    const parseTimestamp = (timestamp) => {
        return moment(new Date(timestamp)).format('LLL');
    }

    const editTask = (event) => {
        event.stopPropagation()
        navigate(`/task/${task.id}`, {replace:true})
    }
 
    const taskHeader = <Row width='100%' gutter={14} >
             <Col>
               <Checkbox defaultChecked={task.completed} defaultValue={task.completed} style={{marginRight: '.8em'}} onClick={(e) => e.stopPropagation()} onChange={completeTask}></Checkbox>
             </Col>
            <Col>
                <Button onClick={editTask}><EditOutlined /></Button>
            </Col>
             <Col>
                 <Paragraph>{task.title}</Paragraph>
             </Col>
        </Row>


    return <div>
    <Collapse>
        <Panel  header={taskHeader} style={{padding: '.2em 1em '}}>
            <Row width='100%' gutter={14} >
                 <Col>
                    <Button><UnorderedListOutlined style={{position:'relative', bottom:'3px'}}/>{task.category.machine_name}</Button>
                 </Col>
                {task.date ? <Col>
                    <Button><CalendarOutlined style={{position:'relative', bottom:'3px'}}/>{parseTimestamp(task.date)}</Button>
                </Col> : null}
            </Row>
          <Row style={{marginTop:'1em'}}>
                <Col>
                    <Paragraph style={{width:'100%', textAlign:'left'}} >{task.description}</Paragraph>
                </Col>
            </Row>
            {task.tags ? <Row gutter={14}>
                {task.tags.map((tag) => <Col key={tag.id}>
                    <Button><TagOutlined />{tag.tagName}</Button> 
                </Col>)}
            </Row> : null}
      </Panel>
    </Collapse>
        
    </div>
}

export default Task;
