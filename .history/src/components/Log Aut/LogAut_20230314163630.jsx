import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LogAut.module.css";

function LogAut() {
    const { logout } = useAuth0();
  const origen34 = window.location.origin
  console.log(origen34, "gordo estoy aqwui parado")
  return (
    <div className={styles.conten}>
      <button
        class={styles.logButton}
        // onClick={()=> useAuth0({ returnTo: window.location.origin })}
    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Log Aut
      </button>
    </div>
  );
}

export default LogAut;
