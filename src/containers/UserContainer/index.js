import React, { useContext, useEffect, useState } from "react";
import { Box } from "grommet";
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
  }, [firestoreDB, props.match.params.userId]);

  return (
    <Layout>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Box>
          {userData.playlists.map(playlist => (
            <div>Got a playlist!</div>
          ))}
          {userData.courses.map(playlist => (
            <div>Got a course!</div>
          ))}
        </Box>
      )}
    </Layout>
  );
};
