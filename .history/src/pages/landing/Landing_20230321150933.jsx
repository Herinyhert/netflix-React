import styles from "./Landing.module.css";
import { useAuth0 } from '@auth0/auth0-react';
import styles from "../Sig in/SigIn.module.css"


export default function Landing(){
    return <div className={styles.contend} >
                    <div className={styles.conten} >
            <button className={styles.siginButton} onClick={() => loginWithRedirect()} >Login</button>
        </div>
        </div>
    
}


function SigIn() {
    const { loginWithRedirect } = useAuth0();
    return (

    )
}

export default SigIn