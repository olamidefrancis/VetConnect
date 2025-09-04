import './Hero.css'
import { Link } from 'react-router'

function Hero() {
    return (
        <div className="Hero__con flexy">
           <div className='Hero__con-imgcon '>
               <div className="Hero__con-imgcon-subcon">
                    <h1 className="Hero__con-imgcon-phrase">
                            Caring for pets, Comforting their people
                    </h1>
                    <h2>New to this site ?</h2>
                    <Link to='/Register' className="Hero__con-imgcon-phrase-register">
                        Register
                    </Link>


               </div>
           </div>

        </div>
    )
}

export default Hero
