import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "./LogAut.module.css"

function LogAut() {
    const { userlogaut } = useAuth0();
    // return <button onClick={()=> logaut({ returnTo: "http://localhost:3000/"})} >Log Aut</button>
    return (
        <div className={styles.conten} >
            <button class={styles.logButton} onClick={()=> logaut({ returnTo: window.location.origin})} >Log Aut</button>
        </div>
    )
}

export default LogAut