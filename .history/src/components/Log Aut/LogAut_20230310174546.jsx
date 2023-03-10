import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogAut() {
    const { logaut } = useAuth0();
    // return <button onClick={()=> logaut({ returnTo: "http://localhost:3000/"})} >Log Aut</button>
    return <button class={styles.logButton} onClick={()=> logaut({ returnTo: window.location.origin})} >Log Aut</button>
}

export default LogAut