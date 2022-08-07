import React, { useContext } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext";

export const SongList = () => {
  // Your code here! ✨
  const { genre, sortOrder, songs } = useContext(MixtapeContext);
  return (
    <>
      {songs.map((song) => (
        <Song
          artist={song.artist}
          genre={song.genre}
          name={song.name}
          year={song.year}
        />
      ))}
    </>
  );
};
