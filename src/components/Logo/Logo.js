import React from 'react'
import Tilt from 'react-tilt';
import './Logo.css';
import logoImg from './icons8-brain-100.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner pa2"> <img style={{paddingTop: '4px'}} src={logoImg} alt='logo'/></div>
            </Tilt>
        </div>
    )
}

export default Logo;
