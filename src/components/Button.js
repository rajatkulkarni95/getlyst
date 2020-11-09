export const Button = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="flex mt-3 md:mt-0 items-center justify-center px-6 py-3 border border-transparent text-lg leading-5 font-bold rounded-md text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
    >
      {children}
    </button>
  );
};
