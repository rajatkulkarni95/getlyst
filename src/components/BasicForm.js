import { useRecommendedStore } from "../store";
import { Checkbox } from "./Checkbox";
import { popularGenres } from "../constants/genres";
import { sliderText } from "../utils/sliderText";
import { useSnackbar } from "notistack";
import { RangeSlider } from "./RangeSlider";
import { useEffect } from "react";

let selected = [];

export const BasicForm = () => {
  const { limit, rangeText } = useRecommendedStore();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    if (e.target.checked) {
      if (selected.length < 5) {
        selected.push(e.target.value);
      } else {
        enqueueSnackbar("Upto 5 Genres allowed", {
          preventDuplicate: true,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          variant: "error",
        });
      }
    } else {
      selected = selected.filter((g) => g !== e.target.value);
    }

    useRecommendedStore.setState({ seed_genres: selected.toString() });
  };

  const handleLimit = (e) => {
    useRecommendedStore.setState({ limit: e.target.value });
  };

  useEffect(() => {
    sliderText(limit);
  }, [limit]);

  return (
    <>
      <div className="flex flex-col rounded-sm w-full m-2 md:m-4 md:w-3/4">
        <ul className="list-none">
          {popularGenres.map((genre) => (
            <Checkbox
              key={genre}
              name={genre}
              handleChange={handleChange}
              selected={selected}
            />
          ))}
        </ul>
        <div className="flex flex-col items-center">
          <label className="mt-5 text-gray-500 font-semibold text-lg">
            Playlist Length
          </label>

          <span className="text-black bg-gray-500 p-2 mt-2 rounded-md ">
            {limit}
          </span>
          <RangeSlider
            handleSliderChange={handleLimit}
            value={limit}
            min="1"
            max="100"
          />
        </div>
        <p className="text-white mx-auto">{rangeText}</p>
      </div>
    </>
  );
};
