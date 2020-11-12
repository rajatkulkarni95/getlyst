import { useRecommendedStore, useStore } from "../store";
import { getPlaylistDetails } from "../services";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

import { Link } from "react-router-dom";
import { SecondaryLink } from "../components/Button";

const Review = () => {
  const { playlistID, playlistData } = useStore();
  const { seed_genres } = useRecommendedStore();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getPlaylistDetails(playlistID)
      .then(({ data }) => useStore.setState({ playlistData: data }))
      .catch((err) =>
        enqueueSnackbar("Unable to Get Playlist Details", {
          preventDuplicate: true,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          variant: "error",
        })
      );
  }, [enqueueSnackbar, playlistID]);

  return (
    <>
      {playlistID && playlistID.length > 0 ? (
        <div className="flex flex-col justify-between items-center w-3/4 mx-auto my-4">
          {playlistData && playlistData.name ? (
            <>
              <h1 className="text-center font-extrabold text-xl text-white lg:text-4xl pb-4">
                Your Playlist is Ready!
              </h1>
              <img
                src={playlistData.images[0].url}
                alt={playlistData.name}
                className="rounded w-56 h-56 md:w-84 md:h-84 mb-5"
              />
              <div>
                <h2 className="text-2xl font-bold text-green-400 text-center">
                  {playlistData.name}
                </h2>
                <p className="text-yellow-400 text-center font-semibold">
                  {playlistData.tracks.total}{" "}
                  <span className="text-gray-400">Songs</span>
                </p>
                <p className="text-gray-400 text-center">
                  Genres :{" "}
                  <span className="text-white font-semibold">
                    {seed_genres}
                  </span>
                </p>
              </div>
              <a
                href={playlistData.external_urls.spotify}
                className="flex items-center my-3 w-3/4 md:w-64 justify-center px-4 py-2 border border-transparent text-sm leading-5 font-bold rounded-md text-black bg-gray-100 hover:text-green-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 cursor-pointer text-center"
              >
                Go to Playlist
              </a>{" "}
            </>
          ) : (
            <h2 className="text-white text-center text-xl my-2">
              Uh Oh! Something went wrong :(
            </h2>
          )}

          <Link
            to="/app"
            className="flex items-center  w-3/4 md:w-64 justify-center px-4 py-2 border border-transparent text-sm leading-5 font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 cursor-pointer text-center"
          >
            Create More Playlists
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="text-xl md:text-3xl text-center text-white font-semibold my-4">
            Skipping Line Again?
          </h2>
          <SecondaryLink>Go Back to Home</SecondaryLink>
        </div>
      )}
    </>
  );
};

export default Review;
