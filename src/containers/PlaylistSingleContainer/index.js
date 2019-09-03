import React, { useContext, useEffect, useState } from "react";
import { Box, Button } from "grommet";
import { Edit } from "grommet-icons";
import { Layout } from "../../components/Layout";
import { AuthenticationContext } from "../../components/Authentication";
import { FirebaseContext } from "../../components/Firebase";
import { PlaylistSinglePage } from "../../components/PlaylistSinglePage";
import { PlaylistForm } from "../../components/PlaylistForm";
import { ToggleForm } from "../../components/ToggleForm";

export const PlaylistSingleContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const { user } = useContext(AuthenticationContext);
  const [isLoading, setLoadingState] = useState(true);
  const [playlistInfo, setPlaylistInfo] = useState(null);
  const { playlistId } = props.match.params;

  useEffect(() => {
    firestoreDB
      .collection("playlists")
      .doc(playlistId)
      .get()
      .then(docSnap => {
        const playlistData = docSnap.exists ? docSnap.data() : null;
        setPlaylistInfo(playlistData);
        setLoadingState(false);
      })
      .catch(e => console.error(e));
  }, [playlistId, firestoreDB]);
  console.log(playlistInfo);
  return (
    <Layout>
      <Box>
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <>
            <PlaylistSinglePage
              playlistName={playlistInfo.playlistData.playlistName}
              playlistDescription={
                playlistInfo.playlistData.playlistDescription
              }
              playlistCourses={playlistInfo.courses}
            />
            {user.isLoggedIn &&
              user.userInfo.uid === playlistInfo.addedBy.uid && (
                <Button icon={<Edit />} label="Edit playlist" />
              )}
            <ToggleForm
              headline="Add new playlist"
              toggleVisibility={() => true}>
              <PlaylistForm
                initialFormStateData={playlistInfo.playlistData}
                initialFormStateCourses={playlistInfo.courses}
                submitFormData={console.log}
              />
            </ToggleForm>
          </>
        )}
      </Box>
    </Layout>
  );
};
