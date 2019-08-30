import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Paragraph, Text } from "grommet";
import { FormAdd } from "grommet-icons";
import { Layout } from "../../components/Layout";
import { PlaylistForm } from "../../components/PlaylistForm";
import { PlaylistCard } from "../../components/PlaylistCard";
import { AuthenticationContext } from "../../components/Authentication";
import { FirebaseContext } from "../../components/Firebase";
import { ToggleForm } from "../../components/ToggleForm";

export const PlaylistContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const { user } = useContext(AuthenticationContext);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [isAddingNewPlaylist, setIsAddingNewPlaylist] = useState(false);

  const onFormSubmit = async formData => {
    const { uid, displayName } = user.userInfo;
    const { playlistData, courses } = formData;
    firestoreDB
      .collection("playlists")
      .add({
        playlistData,
        courses,
        addedBy: {
          uid,
          displayName,
        },
      })
      .then(firestoreRef => {
        firestoreRef.set({ uid: firestoreRef.id }, { merge: true });
      });
  };

  const toggleAddPlaylistForm = () =>
    setIsAddingNewPlaylist(!isAddingNewPlaylist);

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
            console.log(playlistItem);
            return (
              <PlaylistCard
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
      </Box>
      <Button
        icon={<FormAdd />}
        reverse
        label="New playlist"
        onClick={toggleAddPlaylistForm}
      />
      {isAddingNewPlaylist && (
        <ToggleForm
          headline="Add new playlist"
          toggleVisibility={toggleAddPlaylistForm}>
          <PlaylistForm submitFormData={onFormSubmit} />
        </ToggleForm>
      )}
    </Layout>
  );
};
