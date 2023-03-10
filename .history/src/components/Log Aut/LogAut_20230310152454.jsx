import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogAut() {
    const { l } = useAuth0();
    return (
        <button onClick={loginWithRedirect} >Login</button>
    )
}

export default LogAut