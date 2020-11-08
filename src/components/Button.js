export const Button = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="rounded bg-green-700 uppercase leading-4 text-white h-12 tracking-wider px-6 m-2 font-bold text-lg"
    >
      {children}
    </button>
  );
};
