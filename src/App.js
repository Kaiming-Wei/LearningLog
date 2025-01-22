import LogForm from './Components/LogForm/LogForm';
import Logs from './Components/Logs/Logs';
import './App.css';
import { useState } from 'react';
const App = () => {
    const [MockData, setMockData] = useState([
        {
            'id': "001",
            'date': new Date(2024,11,16),
            'desc': "Study JavaScript",
            'time': 60
        },
        {
            'id': "002",
            'date': new Date(2024,11,18),
            'desc': "Study HTML and CSS",
            'time': 50
        },
        {
            'id': "003",
            'date': new Date(2024,11,20),
            'desc': "Study React",
            'time': 80
        }
    
    ])

    const submitData = (newLog) =>{
        setMockData((prevData)=>{
            return [newLog, ...prevData]
        });
    }

    const deleteById = (id) => {
        setMockData((prevData) => {
            return prevData.filter(item => item.id !== id)
        });
        
    }


    return(
        <div className='App'>
            <LogForm submitData={submitData}/>
            <Logs MockData={MockData} deleteById={deleteById}/>
        </div>
    );
};

export default App;