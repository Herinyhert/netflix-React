import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showDetails, setShowName] = useState(false);
  console.log(user.picture, "este es para sacar la imagen");
  console.log(user, "user");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const pictureStyles = `
  margin: 10px 5px 0 5px;
  border-radius: 50%;
  cursor: pointer;
  position: ${showDetails ? 'static' : 'absolute'};
  left: ${showDetails ? 'auto' : '0'};
  top: ${showDetails ? 'auto' : '0'};
  width: ${showDetails ? 'auto' : '50px'};
  height: ${showDetails ? 'auto' : '50px'};
`;

return (
  isAuthenticated && (
    <div className={styles.containerT}>
      <div className={styles.container}>
        <div className={styles.contend}>
          <img
            className={styles.picture}
            style={showDetails ? {} : { ...pictureStyles }}
            src={user.picture}
            alt={user.name}
            onClick={() => setShowDetails(!showDetails)}
          />
          {showDetails && (
            <span className={styles.name} onClick={() => setShowDetails(!showDetails)}>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </span>
          )}
        </div>
      </div>
    </div>
  )
);


  // return (
  //   isAuthenticated && (
  //     <div className={styles.containerT}>
  //       <div className={styles.container}>
  //         <div className={styles.contend}>
  //           <div
  //             className={`${styles.container} ${
  //               showName ? styles.containerCentered : ""
  //             }`}
  //           >
  //             <img
  //               className={styles.picture}
  //               src={user.picture}
  //               alt={user.name}
  //               onClick={() => setShowName(!showName)}
  //             />
  //             <div>
  //               {showName && (
  //                 <span
  //                   className={styles.name}
  //                   onClick={() => setShowName(!showName)}
  //                 >
  //                   <div>{user.name}</div>
  //                   <div>{user.email}</div>
  //                 </span>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // );
};
