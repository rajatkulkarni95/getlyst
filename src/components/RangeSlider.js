export const RangeSlider = ({ handleSliderChange, value, min, max }) => {
  return (
    <div className="flex items-center justify-center outline-none">
      <input
        className="w-56 mx-6 my-4 cursor-pointer md:w-84 bg-green-400 outline-none"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
      />
    </div>
  );
};
