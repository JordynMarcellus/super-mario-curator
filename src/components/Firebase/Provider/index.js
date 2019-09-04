import React from "react";
import { firebaseService, firestoreDB } from "../../../services/firebase";
import FirebaseContext from "../Context";

const FirebaseProvider = ({ children }) => {
  const firestorePlaylistRef = firestoreDB.collection("playlists");
  const addPlaylistToFirebase = async data => {
    await firestoreDB
      .collection("playlists")
      .add(data)
      .then(firestoreRef => {
        firestoreRef.set({ uid: firestoreRef.id }, { merge: true });
      });
  };
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
        addPlaylistToFirebase,
        editPlaylistInFirestore,
        getPlaylistSingleFromFirestore,
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
