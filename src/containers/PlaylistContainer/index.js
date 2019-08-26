import React, { useContext, useEffect, useState } from "react";
import { Button } from "grommet";
import { FormAdd } from "grommet-icons";
import { Layout } from "../../components/Layout";
import { PlaylistForm } from "../../components/PlaylistForm";
import { ToggleForm } from "../../components/ToggleForm";
import { FirebaseContext } from "../../components/Firebase";
import { AuthenticationContext } from "../../components/Authentication";
export const PlaylistContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const { user } = useContext(AuthenticationContext);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [isAddingNewPlaylist, setIsAddingNewPlaylist] = useState(false);

  const onFormSubmit = formData => {
    const { playlistName, playlistDescription } = formData;
    const dataTransformationObject = {
      playlistName,
      playlistDescription,
      coursesToAdd: [],
    };
    for (let key in formData) {
      console.log(formData[key]);
    }
    // firestoreDB.collection("playlists").
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
      {isLoading && <div>Loading...</div>}
      <Button
        icon={<FormAdd />}
        reverse
        label="Add new course"
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
