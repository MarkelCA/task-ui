import React, {persona }from "react";
import { Row, Col, Checkbox, Button, DatePicker, Divider } from "antd";
import {EditOutlined, UnorderedListOutlined, CalendarOutlined, TagOutlined} from '@ant-design/icons';
import { Collapse } from 'antd';
import {Typography} from "antd";
import { message } from "antd";
import moment from 'moment'
const {Paragraph} = Typography
const { Panel } = Collapse;

const Task = ({task}) => {
    const completeTask = ({target}) => {
        if(target.checked)
            message.success("Completed!")
   }

    const parseTimestamp = (timestamp) => {
        return moment(new Date(timestamp)).format('LLL');
    }
 
    const taskHeader = <Row width='100%' gutter={14} >
             <Col>
               <Checkbox defaultValue={task.completed} style={{marginRight: '.8em'}} onClick={(e) => e.stopPropagation()} onChange={completeTask}></Checkbox>
             </Col>
            <Col>
                <Button onClick={(e) => e.stopPropagation()}><EditOutlined /></Button>
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
