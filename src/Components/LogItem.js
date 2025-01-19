import './LogItem.css';
import MyDate from './MyDate';

const LogItem = (props) => {
    const desc = props.desc;
    const time = props.time;
    return (
        <div className='LogItem'>
            <MyDate day={props.day} />
            
            <div className='Contents'>
                <h2 className='Desc'>{desc}</h2>
                <p className='Time'>{time} mins</p>
            </div>
        </div>

    );
}

export default LogItem;