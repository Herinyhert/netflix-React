import styles from "./Landing.module.css";
import img from "../../image/backgraum-1";

export default function Landing(){
    return <div className={styles.contend} >
            <h1>Landing....</h1>
            <img src={img} alt="error" />
        </div>
    
}