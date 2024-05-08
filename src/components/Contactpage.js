import '../App.css';

export const Contactpage = () => {
    
    return (
        <div>
            <div className='contactpage'>
                <div className='contactpage2'>
                    <h1 className='abouttitle'>Contact</h1>
                    <hr className='aboutbd'></hr>
                        <div className="contactform">
                            <form>
                                <label for="name"><b>Name<span className='greencolor'>*</span></b></label><input type="text" id="name" name="name" required/>
                                <label for="email"><b>Email<span className='greencolor'>*</span></b></label><input type="email" id="email" name="email" required/>
                                <label for="message"><b>Message<span className='greencolor'>*</span></b></label><textarea className='message' type="text" id="message" name="message" required/>
                                <input className="submit" type="submit" value="Submit"/>
                            </form>
                        </div>
                </div>
            </div>
            <div className='gap'></div>        
        </div>
    )
}


