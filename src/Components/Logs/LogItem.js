import './LogItem.css';
import MyDate from './MyDate';
import Card from '../../UI/Card/Card';

const LogItem = (props) => {
    const desc = props.desc;
    const time = props.time;
    return (
        <Card className='LogItem'>
            <MyDate day={props.date} />
            
            <div className='Contents'>
                <h2 className='Desc'>{desc}</h2>
                <p className='Time'>{time} mins</p>
            </div>
        </Card>

    );
}

export default LogItem;