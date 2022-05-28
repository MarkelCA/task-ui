import React, {persona }from "react";
import { Row, Col, Checkbox, Button } from "antd";
import {EditOutlined} from '@ant-design/icons';
import { Collapse } from 'antd';
import {Typography} from "antd";
import { message } from "antd";
const {Paragraph} = Typography
const { Panel } = Collapse;

const Task = ({completed, title, category, description, tags, index}) => {
    const completeTask = ({target}) => {
        if(target.checked)
            message.success("Completed!")
   }
 

    const taskHeader = <Row width='100%' gutter={14} >
             <Col>
               <Checkbox defaultValue={completed} style={{marginRight: '.8em'}} onClick={(e) => e.stopPropagation()} onChange={completeTask}></Checkbox>
             </Col>
            <Col>
                <Button onClick={(e) => e.stopPropagation()}><EditOutlined /></Button>
            </Col>
             <Col>
                 <Paragraph>{title}</Paragraph>
             </Col>
        </Row>

    //

    return <div>
    <Collapse>
      <Panel  header={taskHeader} key={index}>
            <Paragraph style={{width:'100%', textAlign:'left'}} >{description}</Paragraph>
      </Panel>
    </Collapse>
        
    </div>
}

export default Task;
