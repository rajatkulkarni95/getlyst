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
  axios.get("https://api.spotify.com/v1/me", { headers }).then(({ data }) => {
    useStore.setState({ userID: data });
    window.localStorage.setItem("user", data.id);
  });

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

export const createPlaylist = async ({
  playlistName,
  description,
  playlist_uris,
  userID,
}) => {
  await axios
    .post(
      `https://api.spotify.com/v1/users/${userID.id}/playlists`,
      {
        name: playlistName,
        description: description,
        public: true,
      },
      { headers }
    )
    .then(({ data }) => data.id)
    .then(
      async (id) =>
        await axios
          .post(`https://api.spotify.com/v1/playlists/${id}/tracks`, null, {
            params: { uris: playlist_uris },
            headers: headers,
          })
          .then((data) => data)
    );
};
