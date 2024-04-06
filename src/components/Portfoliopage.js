import '../App.css';
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Portfoliopage = () => {
    
    return (
        <div>
            <div className='portfoliopage'>
                <h1 className='portfoliotitle'>Portfolio</h1>
                <div className='portfolio-container'>

                    <div className='portfolio-1strow'>
                        <div className='proj1'>
                            <h1>To-do List <FaReact /> </h1>
                            <hr className='aboutbd'></hr>
                            <p>Using 
                                <span className='greencolor'> useState</span>, 
                                <span className='greencolor'> useEffect </span> 
                                and 
                                <span className='greencolor'> OOP</span>
                                , I coded a functional to-do list for chores.
                            </p>
                            <div className='portfolio-difficulty'>
                                <p><b>Difficulty:</b> ★★★★☆</p>
                                <a className='githubicon' href="https://github.com/xanderyas" target="_blank"><FaGithub /></a>
                            </div> 
                        </div>
                        <div className='proj2'>
                            <h1>UK Tax Calculator <FaPython /></h1>
                            <hr className='aboutbd'></hr>
                            <p>Using <span className='greencolor'> OOP</span>, I coded a generator that returns a salary post-tax.</p>
                            <div className='portfolio-difficulty'>
                                <p><b>Difficulty:</b> ★★★☆☆</p>
                                <a className='githubicon' href="https://github.com/xanderyas" target="_blank"><FaGithub /></a>
                            </div>
                        </div>
                    </div>

                    <div className='portfolio-2ndrow'>
                        <div className='proj3'>
                            <h1>Roman Numeral Gen <FaPython /></h1>
                            <hr className='aboutbd'></hr>
                            <p>Converting a number input into Roman numerials, using iteration.</p>
                            <div className='portfolio-difficulty'>
                                <p><b>Difficulty:</b> ★☆☆☆☆</p>
                                <a className='githubicon' href="https://github.com/xanderyas" target="_blank"><FaGithub /></a>
                            </div>
                        </div>
                        <div className='proj4'>
                            <h1>Personal Website <FaReact /></h1>
                            <hr className='aboutbd'></hr>
                            <p>Using packages like 
                            <span className='greencolor'> react-router-dom</span>, as well as developing my 
                            <span className='greencolor'> JavaScript</span>, 
                            <span className='greencolor'> HTML</span> and 
                            <span className='greencolor'> CSS</span>.</p>
                            <div className='portfolio-difficulty'>
                                <p><b>Difficulty:</b> ★★★★★</p>
                                <a className='githubicon' href="https://github.com/xanderyas" target="_blank"><FaGithub /></a>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className='gap'></div>        
        </div>
    )
}


