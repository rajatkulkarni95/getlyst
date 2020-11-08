import create from "zustand";
import { token } from "../spotify";

export const useStore = create((set) => ({
  userID: {},
  access_token: token,
  genres: [],
  recommendedTracks: [],
  playlistName: "GetLyst - Playlist #1267",
  description: "GetLyst Recommended Tracks - Classical and Rock",
}));

export const useRecommendedStore = create((set) => ({
  seed_genres: "",
  limit: 10,
}));
