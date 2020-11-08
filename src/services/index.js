import { token } from "../spotify";
import axios from "axios";
import { useStore } from "../store";

//Access Token General Config
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

/**
 * Get Current User's Profile
 * Used for setting the userID state
 */

export const getUser = () =>
  axios
    .get("https://api.spotify.com/v1/me", { headers })
    .then(({ data }) => useStore.setState({ userID: data }));

export const getAvailableGenres = () => {
  axios
    .get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
      headers,
    })
    .then(({ data: { genres } }) => useStore.setState({ genres: genres }));
};

export const getRecommendedTracks = async (data) => {
  await axios
    .get("https://api.spotify.com/v1/recommendations", {
      params: data,
      headers: headers,
    })
    .then(({ data: { tracks } }) =>
      useStore.setState({ recommendedTracks: tracks })
    );
};
