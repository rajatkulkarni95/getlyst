export const Card = ({ artists, name, album }) => {
  return (
    <div className="flex w-1/4 rounded items-center justify-between bg-gray-800 py-1 px-4 my-2 mx-2">
      <div className="flex justify-center items-center">
        <img
          src={album.images[1].url}
          alt={album.name}
          className="m-2 w-12 h-12"
        />
        <p className="text-white font-bold mx-2 break-words">{name}</p>
      </div>
      <p className="text-green-400 text-sm">{artists[0].name}</p>
    </div>
  );
};
