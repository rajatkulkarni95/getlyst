const Card = ({ artists, name, album }) => {
  return (
    <div className="flex md:w-2/5 xl:w-1/4 w-full rounded items-center justify-between bg-gray-800 py-1 px-2 my-1 mx-1 md:my-2 md:mx-2">
      <div className="flex justify-center items-center">
        <img
          src={album.images[1].url}
          alt={album.name}
          className="mx-1 my-2 w-12 h-12"
        />
        <p className="text-white font-bold mx-2 break-words">{name}</p>
      </div>
      <p className="text-green-400 text-sm">{artists[0].name}</p>
    </div>
  );
};

export default Card;
