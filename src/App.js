//import logo from './logo.svg';
import { PageHeader } from 'antd';
import CreateTaskBox from './components/create-task-box';
import './App.css';




const App = () => {
    return <div className=" 
        App
        p-4 
        border border-sky-500
        shadow shadow-gray-400 
        w-2/3 
        m-auto mt-4">
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Taaoeusks"
                subTitle="Tasksa avaliable"
            /> 

            <CreateTaskBox/>
        </div>
    
}


export default App;
