import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LogAut.module.css";

function LogAut() {
  const { logout } = useAuth0();

  return (
    <div className={styles.conten}>
      <button
        class={styles.logButton}
        // onClick={() => userLogaut({ logoutParams: { returnTo: window.location.origin } })}
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Log Aut
      </button>
    </div>
  );
}

export default LogAut;
