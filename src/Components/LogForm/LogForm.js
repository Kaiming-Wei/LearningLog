import './LogForm.css';
import Card from '../../UI/Card/Card';
import { useState } from 'react';

const LogForm = (props) =>{
    const [inputDate, setInputDate] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputTime, setInputTime] = useState('');

    const changeDateHandler = (event) => {
        setInputDate(event.target.value);
        
    }

    const changeDescHandler = (event) => {
        setInputDesc(event.target.value);
        
    }

    const changeTimeHandler = (event) => {
        setInputTime(event.target.value);
        
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // Split into parts
        const [year, month, day] = inputDate.split("-");
        
        const newLog = {
            id: new Date(),
            date: new Date(year, month - 1, day),
            desc: inputDesc,
            time: inputTime
        }
        console.log(newLog);

        setInputDate('');
        setInputDesc('');
        setInputTime('');
        
        props.submitData(newLog);
    }
    

    return(
        <Card className="LogWrapper">
            <form onSubmit={submitHandler}>
                <div className='FormItem'>
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" onChange={changeDateHandler} value={inputDate} />
                </div>

                <div className='FormItem'>
                    <label htmlFor="desc">Content</label>
                    <input id="desc" type="text" onChange={changeDescHandler} value={inputDesc}/>
                </div>

                <div className='FormItem'>
                    <label htmlFor="time">Time</label>
                    <input id="time" type="text" onChange={changeTimeHandler} value={inputTime} />
                </div>

                <div className='Form-btn'>
                    <button type='submit'>Add</button>
                </div>
                
            </form>
        </Card>
    );
};

export default LogForm;