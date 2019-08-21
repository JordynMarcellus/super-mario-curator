import React, { useContext, useEffect, useState } from "react";
import { Button } from "grommet";
import { FormAdd } from "grommet-icons";
import { Layout } from "../../components/Layout";
import { ToggleForm } from "../../components/ToggleForm";
import { FirebaseContext } from "../../components/Firebase";

export const PlaylistContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [isAddingNewPlaylist, setIsAddingNewPlaylist] = useState(false);
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
        <ToggleForm toggleVisibility={toggleAddPlaylistForm}>"hi"</ToggleForm>
      )}
    </Layout>
  );
};
