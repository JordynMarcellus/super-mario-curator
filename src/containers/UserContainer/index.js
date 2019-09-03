import React, { useContext, useEffect, useState } from "react";
import { Box, FormField, Heading, TextInput } from "grommet";
import { Layout } from "../../components/Layout";
import { FirebaseContext } from "../../components/Firebase";
import { AuthenticationContext } from "../../components/Authentication";
import { Spinner } from "../../components/Spinner";
import { AddCourseContainer } from "../AddCourseContainer";
import { AddPlaylistContainer } from "../AddPlaylistContainer";
export const UserContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const { user } = useContext(AuthenticationContext);
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
    <Layout justify="center" align="center">
      {isLoading && <Spinner />}
      {!isLoading && (
        <Box width="large">
          <Heading level="2">Hi {user.userInfo.displayName}!</Heading>

          <FormField label="Display name">
            <TextInput readonly={true} value={user.userInfo.displayName} />
          </FormField>
          <FormField label="E-mail address">
            <TextInput
              readonly={true}
              type="email"
              value={user.userInfo.email}
            />
          </FormField>
          <FormField label="Maker id">
            <TextInput readonly={true} value={userData.makerId} />
          </FormField>
          {userData.playlists.map(playlist => (
            <div>Got a playlist!</div>
          ))}
          {userData.courses.map(playlist => (
            <div>Got a course!</div>
          ))}
          <Box direction="row" justify="between">
            {userData.playlists.length === 0 && <AddPlaylistContainer />}
            {userData.courses.length === 0 && <AddCourseContainer />}
          </Box>
        </Box>
      )}
    </Layout>
  );
};
