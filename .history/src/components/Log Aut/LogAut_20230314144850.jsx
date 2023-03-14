import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "./LogAut.module.css"

function LogAut() {
    const { userLogaut } = useAuth0();
    // return <button onClick={()=> logaut({ returnTo: "http://localhost:3000/"})} >Log Aut</button>
    const origen = window.location.origin;
    console.log()
    return (
        <div className={styles.conten} >
            <button class={styles.logButton} onClick={()=> userLogaut({ returnTo: window.location.origin })} >Log Aut</button>
        </div>
    )
}

export default LogAut