import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
// import img from "../../image/backgraum-2.webp";

export default function Landing(){
    return <div className={styles.contend} >
            <h1 >Landing....</h1>
        <Link to="/home" className={styles.login}><h1>Login</h1></Link>
            {/* <img src={img} alt="img" /> */}
        </div>
    
}