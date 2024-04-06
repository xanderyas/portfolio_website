import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const Homepage = () => {
    const [hiBlinking, setHiBlinking] = useState(true)
    const [titleBlinking, setTitleBlinking] = useState(false)
    const [descripBlinking, setDescripBlinking] = useState(false)
    const [descripBlinking2, setDescrip2Blinking] = useState(false)
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => (prevTimer + 0.5));

            if (timer === 0) {
                setHiBlinking(true);
            }
            if (timer === 1) {
                setTitleBlinking(true);
                setHiBlinking(false);
            }
            if (timer === 2) {
                setDescripBlinking(true);
                setTitleBlinking(false);
            }
            if (timer === 3) {
                setDescrip2Blinking(true);
                setDescripBlinking(false);
            }
            if (timer === 6.5) {
                setDescrip2Blinking(false);
            }


        }, 500);

        return () => clearInterval(interval);
    }, [timer]); 


    return (
        <div className='home'>
            <div className='topgap'></div>  
            <div className='homepage'>
                <p className={hiBlinking ? 'hi blinker' : 'hi'}>Hi, my name is</p>
                <h1 className={titleBlinking ? 'title blinker' : 'title'}>Alexander Yasruddin</h1>
                <p className={descripBlinking ? 'descrip blinker' : 'descrip'}>I'm a <b>Junior Software Engineer</b>, specialising in <b>Python</b></p>
                <p className={descripBlinking2 ? 'descrip2 blinker' : 'descrip2'}>and <b>React.js</b>, currently based in West London.</p>
                <div className='cvarea'>
                    <Link to="/CV">
                    <button className='cvbutton'><b>CV</b></button>
                    </Link>
                </div>
            </div>
            <div className='gap'></div>        
        </div>
    )
}


