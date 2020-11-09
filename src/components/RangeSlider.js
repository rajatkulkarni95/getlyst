export const RangeSlider = ({ handleSliderChange, value }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="text-black bg-gray-500 p-2 rounded-md ">{value}</span>
      <input
        className="w-56 mx-6 my-4 cursor-pointer md:w-84"
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={handleSliderChange}
      />
    </div>
  );
};
