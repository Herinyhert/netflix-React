import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css"

export const Profile = () => {
   const {user, isAuthenticated, isLoading} = useAuth0()

   if(isLoading){
    return <div>Loading...</div>
   }
   return(
    isAuthenticated && (
        <div className={styles.container}>
            <img className={} src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    )
   )
}