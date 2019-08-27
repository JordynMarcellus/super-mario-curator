import React, { useContext, useEffect, useState } from "react";
import { Box, Heading, Paragraph } from "grommet";
import { Layout } from "../../components/Layout";
import { FirebaseContext } from "../../components/Firebase";
import { PlaylistSinglePage } from "../../components/PlaylistSinglePage";

export const PlaylistSingleContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
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
        console.log(playlistData);
        setPlaylistInfo(playlistData);
        setLoadingState(false);
      })
      .catch(e => console.error(e));
  }, [playlistId, firestoreDB]);
  return (
    <Layout>
      <Box>
        {isLoading && <div>Loading...</div>}
        {playlistInfo && (
          <PlaylistSinglePage
            playlistName={playlistInfo.playlistData.playlistName}
            playlistDescription={playlistInfo.playlistData.playlistDescription}
            playlistCourses={playlistInfo.courses}
          />
        )}
      </Box>
    </Layout>
  );
};
