import styles from "./Landing.module.css";
import img from "../../image/backgraum-2.webp";
import { Spinner } from "../../components/Loading/Spinner";

export default function Landing(){
    return <div className={styles.contend} >
            <img className={styles.img} src={img} alt="img" />
            <Spinner />
        </div>
    
}