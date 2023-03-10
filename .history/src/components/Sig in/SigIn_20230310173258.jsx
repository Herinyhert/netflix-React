import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "../Sig in/SigIn.module.css"

function SigIn() {
    const { loginWithRedirect } = useAuth0();
    return (
        <button className={styles.sigin} onClick={() => loginWithRedirect()} >Login</button>
    )
}

export default SigIn
