import './Logs.css';
import LogItem from './LogItem';

const MockData = [
    {
        'id': "001",
        'day': new Date(2024,11,16),
        'desc': "Study JavaScript",
        'time': 60
    },
    {
        'id': "002",
        'day': new Date(2024,11,18),
        'desc': "Study HTML and CSS",
        'time': 50
    },
    {
        'id': "003",
        'day': new Date(2024,11,20),
        'desc': "Study React",
        'time': 80
    }

];

const LogData = MockData.map((element)=>{
    return <LogItem day={element.day} desc={element.desc} time={element.time} />
})

const Logs = () => {
    //console.log(LogData);
    return(
        <div className="logs">
            {LogData}
        </div>
    );
};

export default Logs;