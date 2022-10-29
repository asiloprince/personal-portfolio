import React from 'react'
import DevIcon from "devicon-react-svg";
import './technologies.css'
import { techs } from '../../helpers/techs';

function Technologies() {
    return (
        <div className='technologies-container' id='technologies'>
            <div>
                <h1 style={{ textAlign: 'center' }}>Some of technologies that I use</h1>
            </div>
            <div className='techcards-container'>
                {techs.map((e, idx) => {
                    return (
                        <div key={idx} className='tech-card'>
                            <DevIcon className='tech-icons' icon={e.iconName} />
                            <span style={{ margin: '5px', fontSize: '1.5rem' }}>{e.name}</span>
                        </div>
                    )
                })}


            </div>
        </div >
    )

}

export default Technologies
