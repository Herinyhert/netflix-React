import { FaSpinner } from "react-icons/fa"
import styles from "./Spinner.module.css"

export function Spinner() {
    return (
        <div className={StyleSheet.spinner}>
            <FaSpinner size={60}/>
        </div>
    )
}

