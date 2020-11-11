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
    .then(({ data }) => {
      useStore.setState({ userID: data.id });
      window.localStorage.setItem("user", data.id);
    })
    .catch((err) => console.log(err));

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
    )
    .catch((error) => "Error: Could not find recommendations");
};

export const createPlaylist = async ({
  playlistName,
  description,
  playlist_uris,
  userID,
}) => {
  await axios
    .post(
      `https://api.spotify.com/v1/users/${userID}/playlists`,
      {
        name: playlistName,
        description: description,
        public: true,
      },
      { headers }
    )
    .then(({ data }) => {
      useStore.setState({ playlistID: data.id });
      return axios.post(
        `https://api.spotify.com/v1/playlists/${data.id}/tracks`,
        null,
        {
          params: { uris: playlist_uris },
          headers: headers,
        }
      );
    })
    .then((data) => data)

    .catch((error) => "Error: Unable to create playlists");
};

export const getPlaylistDetails = async (playlistID) => {
  return await axios
    .get(`https://api.spotify.com/v1/playlists/${playlistID}`, { headers })
    .catch((error) => error.response);
};
