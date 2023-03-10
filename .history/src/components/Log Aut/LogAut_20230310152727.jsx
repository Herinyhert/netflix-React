import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogAut() {
    const { logaut } = useAuth0();
    return (
        <button onClick={()=> logaut()} >Login</button>
    )
}

export default LogAut