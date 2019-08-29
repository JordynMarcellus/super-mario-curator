import React, { useContext, useEffect } from "react";
import { FirebaseContext } from "../../components/Firebase";

export const UserContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  // useEffect(() => {

  // }, [])
  return <div>{props.match.params.userId}</div>;
};
