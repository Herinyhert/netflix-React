import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function SigIn() {
    const { loginWithRedirect } = useAuth0();
    return (
        <form action="">
            <div></div>
            <button></button>
        </form>
    )
}

export default SigIn
