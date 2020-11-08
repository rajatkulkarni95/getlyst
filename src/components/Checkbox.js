export const Checkbox = ({ name, handleChange, selected }) => {
  return (
    <>
      <label
        id={name}
        className={
          "group inline-block rounded-xl bg-gray-300 whitespace-no-wrap my-1 mx-1 px-2 py-2 transition-all duration-200 cursor-pointer " +
          (selected && selected.includes(name)
            ? "bg-green-600 text-white"
            : "bg-gray-300 text-black")
        }
      >
        <input
          type="checkbox"
          htmlFor={name}
          className="hidden"
          value={name}
          onChange={handleChange}
        />
        {name}
      </label>
    </>
  );
};
