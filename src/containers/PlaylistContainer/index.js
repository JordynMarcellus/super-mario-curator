import React, { useContext, useEffect, useState } from "react";
import { Box, Paragraph, Text } from "grommet";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { FirebaseContext } from "../../components/Firebase";
import { AddPlaylistContainer } from "../AddPlaylistContainer";
export const PlaylistContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    firestoreDB
      .collection("playlists")
      .get()
      .then(snapshot => {
        const firebasePlaylists = snapshot.docs.map(doc => doc.data());
        setPlaylists(firebasePlaylists);
        setLoadingState(false);
      })
      .catch(e => console.error(e));
  }, [firestoreDB]);

  return (
    <Layout>
      <Box margin={{ vertical: "medium" }}>
        {isLoading && <div>Loading...</div>}
        {playlists.length !== 0 &&
          playlists.map(playlistItem => {
            return (
              <Card
                key={playlistItem.uid}
                title={playlistItem.playlistData.playlistName}
                description={
                  <>
                    <Paragraph margin={{ top: "0", bottom: "small" }}>
                      {playlistItem.playlistData.playlistDescription}
                    </Paragraph>
                    <Text margin={{ bottom: "small" }}>
                      Total courses: {playlistItem.courses.length}
                    </Text>
                  </>
                }
                linkTo={`/playlists/${playlistItem.uid}`}
                playlist={playlistItem}
              />
            );
          })}
        <AddPlaylistContainer />
      </Box>
    </Layout>
  );
};
