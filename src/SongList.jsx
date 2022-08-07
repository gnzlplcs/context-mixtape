import React, { useContext } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext";

export const SongList = () => {
  // Your code here! ✨
  const { genre, sortOrder, songs } = useContext(MixtapeContext);
  let filteredSongs = [];

  filteredSongs =
    genre !== "all" ? songs.filter((song) => song.genre === genre) : songs;
  console.log(filteredSongs.current);

  sortOrder === "ascending"
    ? filteredSongs.sort((song1, song2) => song1.year - song2.year)
    : filteredSongs.sort((song1, song2) => song2.year - song1.year);

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
