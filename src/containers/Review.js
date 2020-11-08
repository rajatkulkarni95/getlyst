import { useStore } from "../store";

export const Review = () => {
  const { tracks } = useStore();
  return <pre className="text-white">{JSON.stringify(tracks)}</pre>;
};
