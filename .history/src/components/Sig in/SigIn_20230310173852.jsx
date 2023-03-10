import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "../Sig in/SigIn.module.css"

function SigIn() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className={styles.sigin} >
            <button  onClick={() => loginWithRedirect()} >Login</button>
        </div>
    )
}

export default SigIn
