import '../App.css';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div className='errorpage'>
            <div className='topgap'></div>  
            <p className='errorcode'>404</p>
            <h1 className='errortitle'>This page does not exist.</h1>
            <div className='errorarea'>
                <Link to="/">
                    <button className='errorbutton'><b>🡨 Back to Home</b></button>
                </Link>
            </div>
        </div>
    )
}