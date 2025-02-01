import './Logs.css';
import LogItem from './LogItem';
import Card from '../../UI/Card/Card';
import YearFilter from '../YearFilter/YearFilter';
import {useState} from 'react';


const Logs = (props) => {
    const [year, setYear] = useState(2024);

    const changeYearHandler = (year) => {
        setYear(year);
    }

    // Select year to display
    let LogData = props.MockData.filter(element => element.date.getFullYear() === year);


    // Modify the data to LogItem
    LogData = LogData.map((element)=>{
        return <LogItem key={element.id} 
                        date={element.date} 
                        desc={element.desc} 
                        time={element.time}
                        deleteById={()=> props.deleteById(element.id)} />
    });

    if(LogData.length === 0){
        LogData = <p className='Empty-Log'>No Study-Logs Found!</p>
    }


    return(
        <Card className="logs">
            <YearFilter year={year} onYearChange={changeYearHandler}/>
            {LogData}
        </Card>
    );
};

export default Logs;