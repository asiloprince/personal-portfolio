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
                <div className='footer-paragraph'>
                    <p>EN . This website was developed by Prince Gerald Asilo. It cannot and should not be reproduced in any forms or by any means without the consent from him.</p>

                    <br />
                    <p>TAG . Ang website na ito ay nilikha ni Prince Gerald Asilo. Ito ay hindi maaari at hindi dapat kopyahin sa anumang banhay o sa anumang paraan nang walang pahintulot galing sa kaniya.</p>
                </div>
                <div className='footer-icons'>
                    <a className='footer-link' href="https://github.com/asiloprince">
                        <i className="fa fa-github-alt " />
                    </a>
                    <a className='footer-link' href="https://www.facebook.com/">
                        <i className="fa fa-facebook-square " />
                    </a>
                    <a className='footer-link' href="https://www.instagram.com/">
                        <i className="fa fa-instagram " />
                    </a>
                    <a className='footer-link' href="https://www.reddit.com/">
                        <i className="fa fa-reddit " />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
