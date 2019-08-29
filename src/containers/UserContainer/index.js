import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../components/Authentication";
import { Layout } from "../../components/Layout";
import { FirebaseContext } from "../../components/Firebase";
import { Spinner } from "../../components/Spinner";
export const UserContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    firestoreDB
      .collection("users")
      .doc(props.match.params.userId)
      .get()
      .then(snap => {
        const userDBData = snap.exists ? snap.data() : null;
        setUserData(userDBData);
        setLoadingState(false);
      })
      .catch(e => console.error(e));
  }, [firestoreDB, props.match.params.userId, setLoadingState]);

  console.log(isLoading);

  return <Layout>{isLoading && <Spinner />}</Layout>;
};
