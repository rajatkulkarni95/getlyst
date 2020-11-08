import { Card } from "../components/Card";
import { useStore } from "../store";

export const Review = () => {
  const { recommendedTracks } = useStore();
  console.log(recommendedTracks);
  return (
    <div>
      <div className="flex justify-between items-center w-3/4 mx-auto">
        <div className="ml-3 inline-flex rounded-md shadow">
          <button className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Rules
          </button>
        </div>
        <h1 className="text-center font-extrabold text-white text-4xl p-5">
          Your Recommended Playlist
        </h1>
        <button className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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
