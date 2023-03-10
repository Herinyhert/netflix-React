import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogAut() {
    const { logaut } = useAuth0();
    return (
        <button onClick={()=> logaut({ returnTo: window.location.origin})} >Login</button>
    )
}

export default LogAut