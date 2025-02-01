import Backdrop from '../../UI/Backdrop/Backdrop';
import Card from '../../UI/Card/Card';
import './DeleteModal.css';
const DeleteModal = (props) => {

    return(
        <Backdrop>
            <Card className="DeleteModal">
                <div className="Content">
                    Confirm Deletion?
                </div>
                <div className="btn-wrapper">
                    <div className="btn">
                        <button onClick={props.confirm} >Yes</button>
                    </div>
                    <div className="btn">
                        <button onClick={props.cancle}>No</button>
                    </div>
                </div>
            </Card>
        </Backdrop>
    );
};


export default DeleteModal;