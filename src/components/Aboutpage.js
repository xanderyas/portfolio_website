import '../App.css';
import { CiLinkedin } from "react-icons/ci";
import pfp from '../linkedinphoto.jpg';

export const Aboutpage = () => {

    return (
        <div>

        <div className='about'> 
            <div className='aboutpage'>
                <h1 className='abouttitle'>About
                <a href="https://www.linkedin.com/in/xanderyasruddin/" target="_blank">
                    <button className='aboutbutton2'><b><CiLinkedin /> </b></button>
                </a></h1>
                <hr className='aboutbd'></hr>
                <p className='aboutdescrip'>
                Between 2021-2023, I collaborated with <span className='greencolor'>Minecraft Java</span> developers to create custom 
                plug-ins for multiplayer servers. After discovering an interest in CompSci, I completed Harvard University's
                <span className='greencolor'> CS50x</span> & <span className='greencolor'>CS50p</span> and began creating back-end 
                projects in <span className='greencolor'>Python</span>. In 2024, I started branching out to Web Development with  
                <span className='greencolor'> React.js.</span>
                </p>
                
            </div>
            <div className='aboutpage2'>
                <img className="profilepicture"src={pfp} alt="LinkedIn Profile Picture"></img>
                <h4 className='profiletitle'>Software Developer</h4>
                <p className='profilelocation'> London, England</p>
                <a href="https://www.linkedin.com/in/xanderyasruddin/" target="_blank">
                    <button className='aboutbutton'><b>Linkedin</b></button>
                </a>
                
            </div>
                   
        </div>
        <div className='gap'></div>
        </div>
    )
}


