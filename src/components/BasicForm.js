import { useRecommendedStore } from "../store";
import { Checkbox } from "./Checkbox";
import { popularGenres } from "../constants/genres";
import { Select } from "./Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let selected = [];

export const BasicForm = () => {
  const handleChange = (e) => {
    if (e.target.checked) {
      if (selected.length < 5) {
        selected.push(e.target.value);
      } else {
        toast.error("Up to 5 genres only allowed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col rounded-sm m-4 w-3/4">
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
        <Select handleChange={handleLimit} />
      </div>
    </>
  );
};
