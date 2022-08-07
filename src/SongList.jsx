import React, { useContext, useEffect } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext";

export const SongList = () => {
  // Your code here! ✨
  const { genre, sortOrder, songs } = useContext(MixtapeContext);

  const filteredSongs =
    genre !== "all" ? songs.filter((song) => song.genre === genre) : songs;

  return (
    <>
      {filteredSongs.map((song, index) => (
        <Song
          artist={song.artist}
          genre={song.genre}
          name={song.name}
          year={song.year}
          key={index}
        />
      ))}
    </>
  );
};
