import '../App.css';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Navbar = () => {
    return (
        <div>
            <div className='Navbar'>
            <div className='AY'>
                <Link activeClass="active" to="homepage" spy={true} smooth={true} offset={-300} duration={500}>
                    AY
                </Link>
            </div>
            <ul>
                <li className='Navbaritem'>
                        <Link activeClass="active" to="aboutpage" spy={true} smooth={true} offset={-250} duration={500}>
                            About
                        </Link>
                </li>
                <li className='Navbaritem'>
                        <Link activeClass="active" to="portfoliopage" spy={true} smooth={true} offset={-95} duration={500}>
                            Portfolio
                        </Link>
                </li>
                <li className='Navbaritem'>
                        <Link activeClass="active" to="contactpage" spy={true} smooth={true} offset={-300} duration={500}>
                            Contact
                        </Link>
                </li>
              </ul>
            <hr className='navbd'></hr>
            </div>
        </div>
    )
}