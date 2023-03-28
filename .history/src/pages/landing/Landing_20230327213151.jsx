import styles from "./Landing.module.css";
// import img from "../../image/backgraum-2.webp";

export default function Landing(){
    return <div className={styles.contend} >
            <div className={styles.ring} ></div>
            <div className={styles.ring} ></div>
            <div className={styles.ring} ></div>
            <p>Loadin</p>
            {/* <img className={styles.img} src={img} alt="img" /> */}
        </div>
    
}