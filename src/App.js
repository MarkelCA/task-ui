import logo from './logo.svg';
import { DatePicker, message, PageHeader } from 'antd';
import CreateTaskBox from './components/create-task-box';
import {Header} from 'antd/lib/layout/layout';
import Title from 'antd/lib/skeleton/Title';
import './App.css';


const App = () => {
  return (
    <div className="App p-4">
 <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Tasks"
    subTitle="Tasks avaliable"
  />
    </div>
  );
}


export default App;
