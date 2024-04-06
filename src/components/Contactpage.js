import '../App.css';

export const Contactpage = () => {
    
    return (
        <div>
            <div className='contactpage'>
                <div className='contactform'>
                <h1 className='abouttitle'>Contact</h1>
                <hr className='aboutbd'></hr>
                <form>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"></input>
                </form>
                </div>
            </div>
            <div className='gap'></div>        
        </div>
    )
}


