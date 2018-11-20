import { store } from "./firebase";

// Create a root reference
//const

//Upload Text docs
export const doUploadFile = file =>
  store
    .storage()
    .ref()
    .child(file[0].name)
    .put(file);
