import { React, useState, useEffect } from "react";
import { firebaseZustandStore } from "../../zustand/store";
const Form = (props) => {
  const { addSong, updateSong, deleteSong } = props;
  const [newSong, setNewSong] = useState({
    name: "",
    album: "",
    singer: "",
    release: "",
  });
  const { selectedItem, setSelectedItem } = firebaseZustandStore();
  useEffect(() => {
    if (selectedItem) {
      setNewSong(selectedItem);
    }
  }, [selectedItem]);
  return (
    <div className="w-screen h-screen flex flex-1 justify-center items-center flex-col">
      <label>Song name</label>
      <input
        type="text"
        className="border-black border-2"
        value={newSong.name || ""}
        onChange={(e) => setNewSong({ ...newSong, name: e.target.value })}
      ></input>
      <label>Album</label>
      <input
        type="text"
        className="border-black border-2"
        value={newSong.album || ""}
        onChange={(e) => setNewSong({ ...newSong, album: e.target.value })}
      ></input>
      <label>Singer</label>
      <input
        type="text"
        className="border-black border-2"
        value={newSong.singer || ""}
        onChange={(e) => setNewSong({ ...newSong, singer: e.target.value })}
      ></input>
      <label>Release year</label>
      <input
        type="number"
        min="1900"
        max="2099"
        step="1"
        className="border-black border-2"
        value={newSong.release || ""}
        onChange={(e) => {
          setNewSong({ ...newSong, release: +e.target.value });
        }}
      ></input>
      <div className="w-[400px] h-[200px] flex flex-1 justify-around my-[20px]">
        <button
          onClick={() => {
            setSelectedItem({});
          }}
        >
          Cancel editing
        </button>

        <button
          onClick={() => {
            if (Object.keys(selectedItem).length != 0) {
              updateSong(selectedItem.id, newSong);
            } else {
              if (
                Object.keys(newSong).length == 4
              ) {
                addSong(newSong);
              } else {
                 alert("Please type valid information");
                 console.log(Object.keys(newSong));
              }
            }
            setSelectedItem({});
          }}
        >
          {Object.keys(selectedItem) != 0 ? "Update song" : "Add new song"}
        </button>
        <button
          onClick={() => {
            deleteSong(selectedItem.id);
            setSelectedItem({});
          }}
        >
          Delete song
        </button>
      </div>
    </div>
  );
};

export default Form;
