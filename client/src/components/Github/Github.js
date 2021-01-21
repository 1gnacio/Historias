import React, { useState } from 'react'
import logo from './assets/git.png'

function Github() {

    const [cursor, setCursor] = useState();

    const changeCursor = () => {
        setCursor(prevState => {
            return 'pointer';
        });
    }

    const clickHandler = () => {
        window.open("https://github.com/1gnacio/Historias", "_blank")
    }
    
    return(
        <div>
            <img className="mt-20" src={logo} onClick={clickHandler} onMouseOver={changeCursor} style={{cursor: cursor}} alt="GitHub repo" />
        </div>
    );
}


export default Github