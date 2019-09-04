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
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const { playlistId } = props.match.params;
  const firestoreRef = firestoreDB.collection("playlists").doc(playlistId);
  const togglePlaylistEditForm = () => setIsEditFormVisible(!isEditFormVisible);
  const onFormSubmit = data => {
    console.log(data);
    const { playlistData, courses } = data;
    firestoreRef
      .update({
        courses,
        playlistData,
      })
      .then(docSnap => console.log(docSnap));
  };
  useEffect(() => {
    firestoreRef
      .get()
      .then(docSnap => {
        const playlistData = docSnap.exists ? docSnap.data() : null;
        setPlaylistInfo(playlistData);
        setLoadingState(false);
      })
      .catch(e => console.error(e));
  }, [playlistId, firestoreDB, firestoreRef]);
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
                <Button
                  icon={<Edit />}
                  onClick={togglePlaylistEditForm}
                  label="Edit playlist"
                />
              )}
            <ToggleForm
              headline="Edit playlist"
              toggleVisibility={togglePlaylistEditForm}
              isVisible={isEditFormVisible}>
              <PlaylistForm
                initialFormStateData={playlistInfo.playlistData}
                initialFormStateCourses={playlistInfo.courses}
                submitFormData={onFormSubmit}
              />
            </ToggleForm>
          </>
        )}
      </Box>
    </Layout>
  );
};
