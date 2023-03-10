import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function SigIn() {
    const { loginWithRedirect } = useAuth0();
    return (
        <button className={styles} onClick={() => loginWithRedirect()} >Login</button>
    )
}

export default SigIn
