import './Logs.css';
import LogItem from './LogItem';
import Card from '../../UI/Card/Card';


const Logs = (props) => {
    const LogData = props.MockData.map((element)=>{
        return <LogItem key={element.id} date={element.date} desc={element.desc} time={element.time} />
    })




    return(
        <Card className="logs">
            {LogData}
        </Card>
    );
};

export default Logs;