import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className="f3 grow link dim black no-underline br2 pa2 ma2 mt3 pointer  gold bg-dark-green ">Sign
                    Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className="f3 grow  dim black no-underline br2 pa2 ma2 mt3 pointer  gold bg-near-black  ">Sign
                    In</p>
                <p onClick={() => onRouteChange('register')} className="f3 grow  dim black no-underline br2 pa2 ma2 mt3 pointer  light-yellow bg-dark-green ">Sign
                    Up</p>

            </nav>
        );
    }

}

export default Navigation