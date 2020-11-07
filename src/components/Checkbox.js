export const Checkbox = ({ name, handleChange }) => {
  return (
    <>
      <label
        id={name}
        className="inline-block rounded-xl whitespace-no-wrap my-1 mx-1 px-2 py-2 transition-all duration-200 bg-gray-300 text-black cursor-pointer"
      >
        <input
          type="checkbox"
          htmlFor={name}
          className="opacity-0 bg-green-700"
          value={name}
          onChange={handleChange}
        />
        {name}
      </label>
    </>
  );
};
