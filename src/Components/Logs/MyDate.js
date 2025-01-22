import './MyDate.css';

const MyDate = (props) => {
    const Month = props.day.toLocaleString('en-US', {month: "short"});
    const Day = props.day.toLocaleString('en-US', {day: "numeric"});
    return(
        <div className='MyDate'>
            <div className='Month'>
                {Month}
            </div>
            <div className='Day'>
                {Day}
            </div>
        </div>
        
    );
};

export default MyDate;