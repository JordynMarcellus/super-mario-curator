import React, { useContext, useEffect, useState } from "react";
import { Box, Text } from "grommet";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { CardWrapper } from "../../components/CardWrapper";
import { FirebaseContext } from "../../components/Firebase";
import { Spinner } from "../../components/Spinner";
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
      <Box margin={{ vertical: "medium" }} flex="grow">
        {isLoading && <Spinner />}
        {playlists.length !== 0 && (
          <CardWrapper>
            {playlists.map(playlistItem => {
              return (
                <Card
                  key={playlistItem.uid}
                  title={playlistItem.playlistData.playlistName}
                  description={
                    <>
                      <Text margin={{ top: "0", bottom: "small" }}>
                        {playlistItem.playlistData.playlistDescription}
                      </Text>
                      <Text margin={{ bottom: "small" }}>
                        Total courses: {playlistItem.courses.length}
                      </Text>
                    </>
                  }
                  linkTo={`/playlists/${playlistItem.uid}`}
                />
              );
            })}
          </CardWrapper>
        )}
        <AddPlaylistContainer />
      </Box>
    </Layout>
  );
};
