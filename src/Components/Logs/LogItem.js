import './LogItem.css';
import MyDate from './MyDate';
import Card from '../../UI/Card/Card';

const LogItem = (props) => {
    const desc = props.desc;
    const time = props.time;
    const deleteHandler = () =>{
        const isDelete = confirm("Delete?");
        if(isDelete){
            props.deleteById();
        }
    }
    return (
        <Card className='LogItem'>
            <MyDate day={props.date} />
            
            <div className='Contents'>
                <h2 className='Desc'>{desc}</h2>
                <p className='Time'>{time} mins</p>
            </div>
            <div className='delete-x' onClick={deleteHandler}>×</div>
        </Card>

    );
}

export default LogItem;