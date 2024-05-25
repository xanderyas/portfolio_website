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
                    <h2 className='cvtitle'>PERSONAL PROFILE</h2>
                    <hr className='aboutbd'></hr>
                    <p className='cvdescrip'>
                    Knowledge-driven and creative student, with over three years experience in Python
                    and currently practising React.js. Passionate in artificial intelligence and looking
                    to study and work in the technology industry.
                    </p>

                    <h3 className='cvsubtitle'>TECHNICAL TOOLKIT:</h3>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span> 
                                <div className='cvtext'><b>Computer:</b> Python, React.js and JavaScript, with HTML/CSS, Microsoft Office (Word, 
                                Powerpoint, Excel) and Adobe Creative Suite (Premiere Pro, Photoshop)
                                </div>
                        </p>
                    </div>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                    <b>Languages:</b> English (Native), German (Previous Experience), French (Intermediate), Mandarin (Studying)
                                </div>
                        </p>
                    </div>

                    <h2 className='cvtitle'>PROJECTS</h2>
                    <hr className='aboutbd'></hr>

                    <h3 className='cvsubtitlearea'>
                        <span className='cvsubtitle'>Portfolio Website</span> 
                        <span className='cvdate'> Mar 2024 - May 2024</span>
                    </h3>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span> 
                                <div className='cvtext'>
                                    Designed a personal website using <b>React.js</b> and visual frameworks like <b>Framer</b> and <b>Bootstrap</b> to showcase my 
                                    portfolio, information about myself and a contact section for inquiries.
                                </div>
                        </p>
                    </div>

                    <h3 className='cvsubtitlearea'>
                        <span className='cvsubtitle'>To-Do List</span> 
                        <span className='cvdate'>Jan 2024</span>
                    </h3>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span> 
                                <div className='cvtext'>
                                    Developed an application utilising <b>React.js</b> hooks like <b>useState</b> and <b>useEffect</b>, that takes actions as input 
                                    and outputs a list with removable options.
                                </div>
                        </p>
                    </div>

                    <h3 className='cvsubtitlearea'>
                        <span className='cvsubtitle'>UK Tax Salary Calculator</span> 
                        <span className='cvdate'>Nov 2023</span>
                    </h3>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span> 
                                <div className='cvtext'>
                                    Created a Python program utilising <b>Object Orientated Programming</b>, that asks the user a short questionnaire 
                                    about salary and tax and returns a final taxed annual salary, comparable to the UK Government website.
                                </div>
                        </p>
                    </div>

                    <h2 className='cvtitle'>WORK EXPERIENCE</h2>
                    <hr className='aboutbd'></hr>

                    <h3 className='cvsubtitlearea'>
                        <span className='cvsubtitle'>AnimeCloud - Owner & Developer</span> 
                        <span className='cvdate'>June 2021 - Dec 2021</span>
                    </h3>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                    Created moodboards in Adobe Photoshop with artists to create logos and server-wide themes. Drafted name ideas and 
                                    published surveys for audience feedback.<br></br>
                                </div>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                Built a website for information, contact pages and in-game purchases, using HTML, CSS, Javascript and compatible 
                                Minecraft plug-ins.<br></br>
                                </div>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                Collaborated with a professional Minecraft Java developer to create an Attack on Titan plug-in entailing swing-motion ODM 
                                gear, controlled spawning titans and custom items like blades and gas canisters.<br></br>
                                </div>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                Configured all plug-ins to create a proxy-server based system.<br></br>
                                </div>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                Created advertising on TikTok, Instagram Reels and YouTube Shorts using Adobe Premiere Pro.<br></br>
                                </div>
                        </p>
                    </div>

                    <h3 className='cvsubtitlearea'>
                        <span className='cvsubtitle'>AvatarcraftMC - Plug-in & Config Manager</span> 
                        <span className='cvdate'>Nov 2020 - Apr 2021</span>
                    </h3>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                Configured server plug-ins based on staff direction and player feedback by liaising with professional Minecraft 
                                developers. Aided in the development of new plug-ins and back-end routine checks.<br></br>
                                </div>
                        </p>
                    </div>

                    <h3 className='cvsubtitlearea'>
                        <span className='cvsubtitle'>Freshfields Bruckhaus Deringer - Law & Finance Intern</span> 
                        <span className='cvdate'>Aug 2019 - Oct 2019</span>
                    </h3>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                Collaborated with other interns to interview clients and present a bribery case study to a CEO. Set up meetings 
                                with senior partners and colleagues to maximise my understanding of the law industry at a Magic Circle Law Firm. 
                                Shadowed the finance department team at the firm. Aided with siphoning data in Excel spreadsheets.
                                </div>
                        </p>
                    </div>

                    <h2 className='cvtitle'>EDUCATION</h2>
                    <hr className='aboutbd'></hr>

                    <h3 className='cvsubtitlearea'>
                        <span className='cvsubtitle'>Harvard University</span> 
                        <span className='cvdate'>Jan 2022 -  Nov 2023</span>
                    </h3>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                CS50: Introduction to Computer Science
                                </div>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                CS50: Introduction to Programming with Python
                                </div>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                CS50: Understanding Technology
                                </div>
                        </p>
                    </div>

                    <h3 className='cvsubtitlearea'>
                        <span className='cvsubtitle'>British Institute for Modern Music</span> 
                        <span className='cvdate'>Sep 2020 -  June 2023 </span>
                    </h3>
                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                BA (Hons) Songwriting & Music Production (2:2, 59%)
                                </div>
                        </p>
                    </div>

                    <h2 className='cvtitle'>INTERESTS / ATTAINMENTS</h2>
                    <hr className='aboutbd'></hr>

                    <div className='cvtextarea'>
                        <p>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                Essex Dance Theatre performer from 2014 to 2019
                                </div>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                Climbed Mount Kinabalu for Helen Rollason Cancer Charity, raising £1,593
                                </div>
                            <span className='cvbullet'>•</span>
                                <div className='cvtext'>
                                Grade 8 Distinction Trumpet at 14 years old
                                </div>
                        </p>
                    </div>
                </div>
            </div>    
        </div>
    )
}