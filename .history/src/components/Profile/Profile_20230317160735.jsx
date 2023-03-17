import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css";

// export const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     isAuthenticated && (
//       <div className={styles.container}>
//         <div className={styles.contend}>
//           <img className={styles.img} src={user.picture} alt={user.name} />
//           <div >
//             <h2 className={styles.name}>{user.name}</h2>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showName, setShowName] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <div className={styles.container}>
        <div className={styles.contend}>
          <img
            className={styles.img}
            src={user.picture}
            alt={user.name}
            onClick={() => setShowName(!showName)}
            onClick={() => setShowName("hola")}
          />
          <div>
            {/* {showName && <h2 className={styles.name}>{user.name}</h2>} */}
            <h2 className={`${styles.name} ${showName ? styles['show-name'] : ''}`}>{user.name}</h2>

          </div>
        </div>
      </div>
    )
  );
};

