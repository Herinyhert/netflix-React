import styles from "./Landing.module.css";
import img from "../../image";

export default function Landing(){
    return <div className={styles.contend} >
            <h1>Landing....</h1>
            <img src={img} alt="" />
            <img src={img1} alt="" />
        </div>
    
}