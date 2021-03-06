import React, { useContext, useEffect, useState } from "react";
import { Box, Button } from "grommet";
import { Edit } from "grommet-icons";
import { Layout } from "../../components/Layout";
import { AuthenticationContext } from "../../components/Authentication";
import { FirebaseContext } from "../../components/Firebase";
import { PlaylistSinglePage } from "../../components/PlaylistSinglePage";
import { PlaylistForm } from "../../components/PlaylistForm";
import { Spinner } from "../../components/Spinner";
import { ToggleForm } from "../../components/ToggleForm";

export const PlaylistSingleContainer = props => {
  const {
    editPlaylistInFirestore,
    getPlaylistSingleFromFirestore,
  } = useContext(FirebaseContext);
  const { user } = useContext(AuthenticationContext);
  const [isLoading, setLoadingState] = useState(true);
  const [playlistInfo, setPlaylistInfo] = useState(null);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const { playlistId } = props.match.params;
  const togglePlaylistEditForm = () => setIsEditFormVisible(!isEditFormVisible);
  const onFormSubmit = data => {
    editPlaylistInFirestore(playlistId, data).then(() => console.log("hey"));
  };
  useEffect(() => {
    getPlaylistSingleFromFirestore(playlistId)
      .then(docSnap => {
        const playlistData = docSnap.exists ? docSnap.data() : null;
        setPlaylistInfo(playlistData);
        setLoadingState(false);
      })
      .catch(e => console.error(e));
  }, [playlistId, editPlaylistInFirestore, getPlaylistSingleFromFirestore]);
  return (
    <Layout>
      <Box>
        {isLoading && <Spinner />}
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
