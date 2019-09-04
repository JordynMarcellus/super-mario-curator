import React from "react";
import { firebaseService, firestoreDB } from "../../../services/firebase";
import FirebaseContext from "../Context";

const FirebaseProvider = ({ children }) => {
  const firestorePlaylistRef = firestoreDB.collection("playlists");
  // const addPlaylistToFirebase = () => {
  //   firestoreDB.
  // }
  const editPlaylistInFirestore = async (playlistId, data) => {
    await firestorePlaylistRef.doc(playlistId).update(data);
  };
  const getPlaylistSingleFromFirestore = async playlistId => {
    const data = await firestorePlaylistRef.doc(playlistId).get();
    return data;
  };
  // const addCourseToFirebase =
  return (
    <FirebaseContext.Provider
      value={{
        firebaseService,
        firestoreDB,
        editPlaylistInFirestore,
        getPlaylistSingleFromFirestore,
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
