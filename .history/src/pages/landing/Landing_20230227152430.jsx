import styles from "./Landing.module.css";
import img from "../../image/backgraum"

export default function Landing(){
    return <div className={styles.contend} >
            <h1>Landing....</h1>
            <img src={img} alt="" />
        </div>
    
}