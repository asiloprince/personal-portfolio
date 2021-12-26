import React from 'react'
import './footer.css'
import logo from '../../images/logo.PNG'

function Footer() {
    return (
        <div>
            <footer className='footer-container'>
                <div className='footer-content'>

                    <h6> <img className='logo-footer' src={logo} alt='LOGO icon' />Prince Gerald Asilo &copy; {new Date().getFullYear()}</h6>

                </div>
                <div className="footer-paragraph">
                    <h3>Contact</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Batangas City</p>
                    <p><i class="fas fa-phone"></i> Phone: +639663764307 </p>
                    <p><i class="fas fa-envelope"></i> Email: <a href="mailto:asiloprincegerald@gmail.com">asiloprincegerald@gmail.com</a></p>

                </div>
                <div className='footer-icons'>
                    <a className='footer-link' href="https://github.com/asiloprince">
                        <i className="fa fa-github-alt " />
                    </a>
                    <a className='footer-link' href="https://www.facebook.com/">
                        <i className="fa fa-facebook-square " />
                    </a>
                    <a className='footer-link' href="https://www.reddit.com/">
                        <i className="fa fa-reddit " />
                    </a>
                    <a className='footer-link' href="https://www.linkedin.com/in/prince-asilo-83280321b/">
                        <i className="fa fa-linkedin-square " />
                    </a>
                </div>
            </footer>
            <div>

            </div>
        </div>
    )
}

export default Footer
