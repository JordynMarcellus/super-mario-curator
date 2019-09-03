import React, { useContext, useState } from "react";
import { Box, Button } from "grommet";
import { FormAdd } from "grommet-icons";
import { AuthenticationContext } from "../../components/Authentication";
import { FirebaseContext } from "../../components/Firebase";
import { PlaylistForm } from "../../components/PlaylistForm";
import { ToggleForm } from "../../components/ToggleForm";

const DEFAULT_PLAYLIST_ADD_STATE = {
  name: "",
  id: "",
};

const ADD_PLAYLIST_FORM_STATE = [DEFAULT_PLAYLIST_ADD_STATE];

export const AddPlaylistContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const { user } = useContext(AuthenticationContext);
  const [isAddingNewPlaylist, setIsAddingNewPlaylist] = useState(false);
  const togglePlaylistAddForm = () =>
    setIsAddingNewPlaylist(!isAddingNewPlaylist);

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

  return (
    <Box>
      <Button
        icon={<FormAdd />}
        reverse
        label="New playlist"
        onClick={togglePlaylistAddForm}
      />
      {isAddingNewPlaylist && (
        <ToggleForm
          headline="Add new playlist"
          toggleVisibility={togglePlaylistAddForm}>
          <PlaylistForm submitFormData={onFormSubmit} />
        </ToggleForm>
      )}
    </Box>
  );
};
