import './Logs.css';
import LogItem from './LogItem';
import Card from '../../UI/Card/Card';


const Logs = (props) => {
    let LogData = props.MockData.map((element)=>{
        return <LogItem key={element.id} 
                        date={element.date} 
                        desc={element.desc} 
                        time={element.time}
                        deleteById={()=> props.deleteById(element.id)} />
    });

    if(LogData.length === 0){
        LogData = <p className='Empty-Log'>No Study-Logs!</p>
    }


    return(
        <Card className="logs">
            {LogData}
        </Card>
    );
};

export default Logs;