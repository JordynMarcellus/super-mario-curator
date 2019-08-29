import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../components/Authentication";
import { Layout } from "../../components/Layout";
import { FirebaseContext } from "../../components/Firebase";

export const UserContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const [userData, setUserData] = useState(null);
  console.log();
  useEffect(() => {
    firestoreDB
      .collection("users")
      .doc(props.match.params.userId)
      .get()
      .then(snap => {
        const userDBData = snap.exists ? snap.data() : null;
        setUserData(userDBData);
      })
      .catch(e => console.error(e));
  }, [firestoreDB, props.match.params.userId]);
  return <Layout>👋🏻</Layout>;
};
