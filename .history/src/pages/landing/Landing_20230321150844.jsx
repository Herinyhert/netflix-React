import styles from "./Landing.module.css";
// import img from "../../image/backgraum-2.webp";

export default function Landing(){
    return <div className={styles.contend} >
            {/* <img className={styles.img} src={img} alt="img" /> */}
        </div>
    
}
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "../Sig in/SigIn.module.css"

function SigIn() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className={styles.conten} >
            <button className={styles.siginButton} onClick={() => loginWithRedirect()} >Login</button>
        </div>
    )
}

export default SigIn