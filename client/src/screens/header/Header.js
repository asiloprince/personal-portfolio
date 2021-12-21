import React from 'react'
import './header.css'
import Typed from 'react-typed'


const intro = '<h3> Hello,</h3>'
const name = ' <h3><strong>  I\'m Prince Gerald </h3> </strong>'
const dev = '<strong>Full-stack Developer.</strong>'

function Header() {
    return (
        <div className='main-info'>

            <Typed
                strings={[
                    `${intro} ${name} An aspiring ${dev}`,

                ]}

                typeSpeed={70}
            />
            <br />
            <div className="colz">
                <a className='lnk' href="https://github.com/asiloprince">
                    <i className="fa fa-github-alt " />
                </a>
                <a className='lnk' href="https://www.facebook.com/asilo.prince25">
                    <i className="fa fa-facebook-square " />
                </a>
                <a className='lnk' href="https://www.instagram.com/y9er_2/">
                    <i className="fa fa-instagram " />
                </a>
                <a className='lnk' href="https://www.reddit.com/">
                    <i className="fa fa-reddit " />
                </a>
            </div>

        </div>
    )
}

export default Header