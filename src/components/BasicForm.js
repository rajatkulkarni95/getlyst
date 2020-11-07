import { useRecommendedStore } from "../store";
import { Checkbox } from "./Checkbox";
import { popularGenres } from "../utils/genres";
import { Select } from "./Select";

let selected = [];

export const BasicForm = () => {
  const handleChange = (e) => {
    e.target.checked ? (
      selected.length <= 5 ? (
        selected.push(e.target.value)
      ) : (
        <h3>Upto 5 Genres only allowed</h3>
      )
    ) : (
      selected.filter((g) => g !== e.target.value)
    );

    useRecommendedStore.setState({ seed_genres: selected.toString() });
  };

  const handleLimit = (e) => {
    useRecommendedStore.setState({ limit: e.target.value });
  };

  return (
    <div className="flex flex-col rounded-sm m-4 w-3/4">
      <ul className="list-none">
        {popularGenres.map((genre) => (
          <Checkbox key={genre} name={genre} handleChange={handleChange} />
        ))}
      </ul>
      <Select handleChange={handleLimit} />
    </div>
  );
};
