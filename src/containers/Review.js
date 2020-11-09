import { Card } from "../components/Card";
import { useStore } from "../store";
import { createPlaylist } from "../services";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Navbar } from "../components/Navbar";

export const Review = () => {
  const {
    recommendedTracks,
    playlistName,
    playlist_uris,
    description,
    userID,
  } = useStore();

  useEffect(() => {
    useStore.setState({
      playlist_uris: recommendedTracks.map((track) => track.uri).toString(),
    });
  }, [recommendedTracks]);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="flex justify-between items-center lg:w-3/4 mx-auto">
        <div className="inline-flex rounded-md shadow">
          <button className="inline-flex font-sans items-center justify-center px-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Rules
          </button>
        </div>
        <h1 className="text-center font-extrabold text-xl text-white lg:text-4xl pb-4">
          Your Recommended Playlist
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex">
          <label
            htmlFor="playlist_name"
            className="text-sm font-medium leading-5 text-gray-400 mx-2"
          >
            Playlist Name
          </label>
          <input
            id="playlist_name"
            className="mx-2 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
            }).then(
              toast.success("Playlist Created", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            )
          }
          className="flex mt-3 md:mt-0 items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-bold rounded-md text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
        >
          Add to Spotify
        </button>
      </div>
      <div className="flex justify-center flex-wrap p-4 w-full mx-auto">
        {recommendedTracks.map((track) => (
          <Card key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};
