import create from "zustand";
import { token } from "../spotify";

export const useStore = create((set) => ({
  userID: {},
  access_token: token,
  genres: [],
  recommendedTracks: [],
}));

export const useRecommendedStore = create((set) => ({
  seed_genres: "",
  limit: 10,
}));
