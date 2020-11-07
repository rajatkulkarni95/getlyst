export const Button = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="rounded bg-green-700 text-white py-3 px-6 m-2 font-bold text-lg"
    >
      {children}
    </button>
  );
};
