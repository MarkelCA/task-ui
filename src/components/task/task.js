import React, {persona
    }from "react";
import { Row, Col, Select, Input, Checkbox } from "antd";
import { Collapse } from 'antd';
import {Typography} from "antd";
const {Paragraph} = Typography
const { Panel } = Collapse;
const { Option } = Select

const Task = ({completed, title, category, description, tags}) => {

    const categorySelect = (
        <div className='task-controls'>
            <Select defaultValue={category} onClick={(e) => e.stopPropagation()}>
            <Option value="personal">Personal</Option>
            <Option value="profesional">Profesional</Option>
            <Option value="estudio">Estudio</Option>
        </Select>
        </div>
    )

    const taskHeader = <Row width='100%'>
             <Col>
                <Checkbox defaultValue={completed} style={{marginRight: '.8em'}} onClick={(e) => e.stopPropagation()}></Checkbox>
             </Col>
             <Col>
                {categorySelect}
             </Col>
             <Col>
                 <Input  defaultValue={title}/>
             </Col>
        </Row>
    //

    return <div>
    <Collapse>
      <Panel  header={taskHeader} key="1">
            <Paragraph style={{width:'100%', textAlign:'left'}} editable>{description}</Paragraph>
      </Panel>
    </Collapse>
        
    </div>
}

export default Task;
