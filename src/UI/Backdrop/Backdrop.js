import './Backdrop.css';
import ReactDom from 'react-dom';

const Backdrop_root = document.getElementById('Backdrop-root');
const Backdrop = (props) => {
    return(
        ReactDom.createPortal(
        <div className="Backdrop">
            {props.children}
        </div>, 
        Backdrop_root)
    );
};

export default Backdrop;