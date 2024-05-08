import '../App.css';
import { Link } from 'react-router-dom';

export const Cvpage = () => {

    return (
        <div>
            <div className='page'>
                    
                <div className='cvpage'>
                    <Link to="/">
                        <button className='cvback'><b>Back</b></button>
                    </Link>
                    <h1 className='cvname'>Alexander Yasruddin</h1>
                    <h2 className='cvtitle'>SUMMARY</h2>
                    <hr className='aboutbd'></hr>
                    <p className='cvtext'>
                    Confident, knowledge-driven and passionate professional seeking opportunities to work in the 
                    technology industry. Adept at efficient problem solving, while upholding the highest standard of quality.
                    </p>
                    <h3 className='cvsubtitle'>TECHNICAL TOOLKIT:</h3>
                    <p className='cvtext'>
                    <b> • Computer:</b> Programming Languages C, Python, React.js and JavaScript, with HTML/CSS, Microsoft Office (Word, 
                    Powerpoint, Excel) and Adobe Creative Suite (Premiere Pro, Photoshop)</p>
                    <p className='cvtext'>
                    <b> • Languages:</b> English (Native), German (Previous Experience), French (Intermediate), Mandarin (Studying)
                    </p>

                    <h2 className='cvtitle'>PROJECTS</h2>
                    <hr className='aboutbd'></hr>

                    <h3 className='cvsubtitle'>Portfolio Website</h3>
                    <p className='cvtext'>
                    • Designed a personal website using <b>React.js</b> and visual frameworks like <b>Framer</b> and <b>Bootstrap</b> to showcase my 
                    portfolio, information about myself and a contact section for inquiries.
                    </p>

                    <h3 className='cvsubtitle'>To-Do List</h3>
                    <p className='cvtext'>
                    • Developed an application utilising <b>React.js</b> hooks like <b>useState</b> and <b>useEffect</b>, that takes actions as input 
                    and outputs a list with removable options.
                    </p>

                    <h3 className='cvsubtitle'>UK Tax Salary Calculator </h3>
                    <p className='cvtext'>
                    • Created a Python program utilising <b>Object Orientated Programming</b>, that asks the user a short questionnaire 
                    about salary and tax and returns a final taxed annual salary, comparable to the UK Government website.
                    </p>

                    <h2 className='cvtitle'>WORK EXPERIENCE</h2>
                    <hr className='aboutbd'></hr>

                    <h3 className='cvsubtitle'>Freshfields Deringer Bruckhaus</h3>
        

                    <h3 className='cvsubtitle'>Law Intern</h3>
                    <p className='cvtext'>
                    • Studied a bribery case study and presented gathered information to a CEO increasing research skills<br></br>
                    • Worked with other interns to interview a client, improving team communications<br></br>
                    • Developed initiative by setting up meetings with Senior Partners and other colleagues
                    </p>

                    <h2 className='cvtitle'>EDUCATION</h2>
                    <hr className='aboutbd'></hr>

                    <h3 className='cvsubtitle'>Harvard University</h3>
                    <p className='cvtext'>
                    • CS50: Introduction to Computer Science<br></br>
                    • CS50: Introduction to Programming with Python<br></br>
                    • CS50: Understanding Technology
                    </p>

                    <h3 className='cvsubtitle'>British Institute for Modern Music</h3>
                    <p className='cvtext'>
                    • BA (Hons) Songwriting & Music Production: 2:2
                    </p>

                </div>
            </div>    
        </div>
    )
}