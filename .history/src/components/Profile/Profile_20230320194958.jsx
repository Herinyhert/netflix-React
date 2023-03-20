import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showName, setShowName] = useState(false);
  console.log(user.picture, "este es para sacar la imagen");
  console.log(user, "user");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className={styles.containerT}>
        <div className={styles.container}>
          <div className={styles.contend}>
            <img
              className={styles.picture}
              src={user.picture}
              alt={user.name}
              onClick={() => setShowName(!showName)}
            />
            <div>
              {showName && (
                <span
                className={styles.name}
                onClick={() => setShowName(!showName)}
                >
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                </span>
              )}
            </div>
          </div>
        </div>
              {/* <img src={user.picture} alt="hola" /> */}
      </div>
    )
  );
};
