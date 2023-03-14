import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "./LogAut.module.css"

function LogAut() {
    const { userLogaut } = useAuth0();
    const origen2 = window.location.origin;
    // console.log(origen2, "estamos aqui")
    return (
        <div className={styles.conten} >
            <button  onClick={()=> userLogaut({ returnTo: origen2 })} >Log Aut</button>
        </div>
    )
}

export default LogAut