import React, { useContext, useEffect, useState } from "react";
import { Box, Button } from "grommet";
import { Edit } from "grommet-icons";
import { Layout } from "../../components/Layout";
import { AuthenticationContext } from "../../components/Authentication";
import { FirebaseContext } from "../../components/Firebase";
import { PlaylistSinglePage } from "../../components/PlaylistSinglePage";

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
          </>
        )}
      </Box>
    </Layout>
  );
};
