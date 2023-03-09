import styles from "./Landing.module.css";
import img from "..//";

export default function Landing(){
    return <div className={styles.contend} >
            <h1>Landing....</h1>
            <img src={img} alt="img" />
        </div>
    
}