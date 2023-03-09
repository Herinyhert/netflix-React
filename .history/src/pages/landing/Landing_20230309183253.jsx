import styles from "./Landing.module.css";
// import img from "../../image/backgraum-2.webp";

export default function Landing(){
    return <div className={styles.contend} >
            <h1 >Landing....</h1>
        <Link to="/" className={styles.logou}><h1>Logou</h1></Link>
        <Link to="/home" className={styles.login}><h1>Login</h1></Link>
            {/* <img src={img} alt="img" /> */}
        </div>
    
}