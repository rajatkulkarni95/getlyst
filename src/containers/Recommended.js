import Card from "../components/Card";
import { useStore } from "../store";
import { createPlaylist } from "../services";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { SecondaryLink } from "../components/Button";

const Recommended = () => {
  const {
    recommendedTracks,
    playlistName,
    playlist_uris,
    description,
    userID,
  } = useStore();

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const handleSubmit = async () => {
    enqueueSnackbar("Playlist Created", {
      preventDuplicate: true,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: "success",
    });

    history.push("/review");
  };

  useEffect(() => {
    useStore.setState({
      playlist_uris: recommendedTracks.map((track) => track.uri).toString(),
    });
  }, [recommendedTracks]);

  return (
    <div>
      {recommendedTracks.length > 0 ? (
        <>
          <div className="lg:w-3/4 mx-auto flex justify-center">
            <h1 className="text-center font-extrabold text-xl text-white md:text-4xl pb-4">
              Your Recommended Playlist
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center sm:w-full md:w-auto">
            <div className="flex mx-2 mb-2 md:mb-0 rounded-md">
              <input
                id="playlist_name"
                className="bg-gray-300 appearance-none border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                value={playlistName}
                onChange={(e) =>
                  useStore.setState({ playlistName: e.target.value })
                }
              />
            </div>
            <button
              onClick={async () =>
                await createPlaylist({
                  playlistName,
                  description,
                  playlist_uris,
                  userID,
                }).then((id) => handleSubmit())
              }
              className="flex items-center w-72 md:w-auto justify-center px-4 py-2 border border-transparent text-sm leading-5 font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
            >
              Add to Spotify
            </button>
          </div>
          <div className="flex justify-center flex-wrap p-4 w-full mx-auto">
            {recommendedTracks.map((track) => (
              <Card key={track.id} {...track} />
            ))}
          </div>{" "}
        </>
      ) : (
        <div>
          <h2 className="text-xl md:text-3xl text-center text-white font-semibold my-4">
            Did we skip the selection process?
          </h2>
          <SecondaryLink>Go Back to Home</SecondaryLink>
        </div>
      )}
    </div>
  );
};

export default Recommended;
