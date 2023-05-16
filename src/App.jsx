import { useState, useEffect } from "react";
import "./App.css";
import { db } from "../firebase/firebase.config";
import { firebaseZustandStore } from "../zustand/store";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import Form from "./components/Form";
function App() {
  const { dataStorage, setDataStorage, setSelectedItem} = firebaseZustandStore();
  const song = collection(db, "song");
  const handleGetSong = async () => {
    const response = await getDocs(song);
    const dataCollection = response.docs.map((docs) => ({
      ...docs.data(),
      id: docs.id,
    }));
    setDataStorage(dataCollection);
  };
  useEffect(() => {
      handleGetSong();
  }, []);

  const handleAddSong = async (data) => {
    await addDoc(song, data);
    handleGetSong();
  };
  const handleUpdateSong = async (id,data) => {
    await updateDoc(doc(db, 'song', id), data);
    handleGetSong();
  }
  const handleDeleteSong = async (id) => {
    await deleteDoc(doc(db, 'song', id));
    handleGetSong();
  }
  return (
    <div className="w-screen h-screen flex flex-1 justify-center items-center flex-col">
      <Form addSong={handleAddSong} updateSong={handleUpdateSong} deleteSong={handleDeleteSong} />
      <h1>Click at a song block to edit its information</h1>
      {dataStorage?.map((item, index) => {
        return (
          <div
            className="my-[30px] flex flex-1 justify-center items-center flex-col"
            key={item.id}
            onClick={() => {setSelectedItem(item)}}
          >
            <h1>Song: {item.name}</h1>
            <h1>Album: {item.album}</h1>
            <h1>Singer: {item.singer}</h1>
            <h1>Release: {item.release}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
