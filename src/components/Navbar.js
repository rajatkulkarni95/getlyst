import { useStore } from "../store";

export const Navbar = () => {
  const { userID } = useStore();
  return (
    <nav className="flex justify-between items-center px-6 py-3">
      <h1 className="text-white text-3xl font-bold text-center mx-2">
        GetLyst
      </h1>
      <div className="text-green-600 text-xl font-semibold">{userID}</div>
    </nav>
  );
};
