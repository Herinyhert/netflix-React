import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showName, setShowName] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      div
    )
  );
};


