import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{backgroundColor: "#1a1a1a", width: '100vw', minheight: '100px', marginTop: 'auto', display: 'flex', justifyContent: 'space-evenly'}} className='footer'>
            <Link to='https://www.linkedin.com/in/dejuan-deal-242bn/'>
                <i class="bi bi-linkedin fa-lg" style={{color: 'white'}}>Linkedin</i>
            </Link>
            <Link to='https://github.com/dealhouse'>
            <i class="bi bi-github" style={{color: 'white'}}>Github</i>
            </Link>
        </div>
    );
}

export default Footer;