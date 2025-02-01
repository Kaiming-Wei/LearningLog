import './LogItem.css';
import MyDate from './MyDate';
import Card from '../../UI/Card/Card';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useState } from 'react';

const LogItem = (props) => {
    const desc = props.desc;
    const time = props.time;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const showDeleteHandler = () =>{
        setShowDeleteModal(true);
    };

    const confirmHandler = () =>{
        props.deleteById();
        setShowDeleteModal(false);
    };
    
    const cancleHandler = () =>{
        setShowDeleteModal(false);
    };
    return (
        <Card className='LogItem'>
            <MyDate day={props.date} />
            
            <div className='Contents'>
                <h2 className='Desc'>{desc}</h2>
                <p className='Time'>{time} mins</p>
            </div>
            <div className='delete-x' onClick={showDeleteHandler}>×</div>

            {showDeleteModal && <DeleteModal confirm={confirmHandler} cancle={cancleHandler} />}
        </Card>

    );
}

export default LogItem;