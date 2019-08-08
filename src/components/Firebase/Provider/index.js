import React from "react";
import { firebaseService, firestoreDB } from "../../../services/firebase";
import FirebaseContext from "../Context";

const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={{ firebaseService, firestoreDB }}>
    {children}
  </FirebaseContext.Provider>
);

export default FirebaseProvider;
