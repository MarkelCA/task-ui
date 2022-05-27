//import logo from './logo.svg';
import { PageHeader, Row, Col } from 'antd';
import CreateTaskBox from './components/create-task-box';
import './App.css';

import { Header } from 'antd/lib/layout/layout';
import {Typography} from 'antd';
import Task from './components/task/task';

const {Title} = Typography

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

const App = () => {

    const taskList = tasks.map((task) => <Task 
        completed={task.completed} 
        title={task.title} 
        category={task.category}
        description={task.description}
        tags={task.tags}
        />
    )

    return <div className="App" >
         <Row gutter={16}>
             <Col span={24}>
                <Header>
                    <Title style={{color:'white'}}>Task</Title>
                </Header>
             </Col>
        </Row>
        <Row gutter={16} >
             <Col lg={12} md={16} sm={20} style={{margin: 'auto'}}>
                    <CreateTaskBox/>
                    {taskList}
             </Col>
        </Row>

        </div>
    
}


export default App;
