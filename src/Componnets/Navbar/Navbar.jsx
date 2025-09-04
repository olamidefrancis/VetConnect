import './Navbar.css'
import { Link } from 'react-router'
import paw from '../../assets/Images/icons8-paw-100.png'




function Navbar() {
    const burgermi=()=>{
        
        let nav=document.querySelector('.main__navbar--content--linkcon');
        let burgerFirstLine=document.querySelector('.line1');
        let burgerSecondLine=document.querySelector('.line2');

        
            burgerFirstLine.classList.toggle('line1-toggled');
            burgerSecondLine.classList.toggle('line2-toggled');

            nav.classList.toggle('restore');
        
    }

       
    return (
        <div className="main__navbar">
            <div className="main__navbar--content">

                <figure className='flexy'>
                    <img src={paw} alt="logo" />
                </figure>

                <div className="main__navbar--content--linkcon ">
                    <Link to='/Home' className='main__navbar--content--linkcon--home'>
                        Home
                    </Link>

                    <Link to='/About' className='main__navbar--content--linkcon--about'>
                        About
                    </Link>

                    <Link to='/Contact' className='main__navbar--content--linkcon--about'>
                        Contact
                    </Link>

                    <Link to='/Login'className='main__navbar--content--logandreg--Login  log'>
                        Log in 
                    </Link>
                </div>

                <div className="humburgers" onClick={burgermi}>
                    <div className="line1">

                    </div>
                    <div className="line2">

                    </div>
                </div>

               

            </div>
        </div>
    )
}

export default Navbar

