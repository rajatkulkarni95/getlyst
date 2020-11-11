import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../services";
import { useStore } from "../store";
import { logout } from "../utils/logout";

export const Navbar = () => {
  const { userID } = useStore();

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!user || user === "undefined") {
      getUser();
    }
    useStore.setState({ userID: user });

    return () => null;
  }, []);

  const [show, setShow] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-3">
      <Link to="/">
        <h1 className="text-white text-3xl font-bold text-center mx-2">
          Get<span className="text-green-500">Lyst</span>
        </h1>
      </Link>

      <div className="ml-3 relative">
        <div>
          <button
            className="max-w-xs flex items-center text-base md:text-xl rounded-full text-green-500"
            id="user-menu"
            aria-label="User menu"
            aria-haspopup="true"
            onClick={() => setShow(!show)}
          >
            {userID}
          </button>
        </div>

        <div
          className={
            "origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg"
          }
        >
          <div
            className={
              "py-1 rounded-md bg-red-500 text-white shadow-xs hover:bg-red-700 " +
              (show ? "block" : "hidden")
            }
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <button
              className="block py-1 text-sm mx-auto"
              role="menuitem"
              onClick={() => logout()}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
