import LogForm from './Components/LogForm/LogForm';
import Logs from './Components/Logs/Logs';
import './App.css';
import { useState } from 'react';
const App = () => {
    const [MockData, setMockData] = useState([
        {
            'id': "001",
            'date': new Date(2021,11,16),
            'desc': "Cs103 Foundation Of Computer Science",
            'time': 60
        },
        {
            'id': "002",
            'date': new Date(2022,8,20),
            'desc': "Discrete Math",
            'time': 120
        },
        {
            'id': "003",
            'date': new Date(2024,11,16),
            'desc': "Study JavaScript",
            'time': 60
        },
        {
            'id': "004",
            'date': new Date(2024,11,18),
            'desc': "Study HTML and CSS",
            'time': 50
        },
        {
            'id': "005",
            'date': new Date(2024,11,20),
            'desc': "Study React",
            'time': 80
        },
        {
            'id': "006",
            'date': new Date(2025,1,29),
            'desc': "Greate Ideas In Algothrim",
            'time': 75
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