import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const AdminMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth, auth } = useAuth();

  /*The signOut function logs out the authenticated user by sending a POST request to the server, clearing authentication data, storing the current URL, and navigating to the user-login page. */

  const signOut = () => {
    axios.post(`logout/${auth?.role}/${auth?.id}`).catch((err) => {
      console.error(err?.response);
    });
    setAuth({});
    localStorage.removeItem("refresh");
    navigate("/admin-login", {
      state: {
        prevURL: location.pathname,
      },
    });
  };

  return (
    <div className="origin-top-right absolute top-0 right-0 mt-16 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
      <div className="flex flex-col py-2 text-gray-500">
        <span className="text-bold text-lg text-black px-3 cursor-auto">
          Account
        </span>
        <span
          className="hover:bg-pinkBg hover:text-gray-800 py-1 px-3"
          onClick={() => navigate("/admin-profile")}
        >
          Edit
        </span>
        <span
          className="hover:bg-pinkBg hover:text-gray-800 py-1 px-3"
          onClick={() => navigate("/admin-settings")}
        >
          Settings
        </span>
        {/* <span className="hover:bg-pinkBg hover:text-gray-800 py-1 px-3">
          Help
        </span> */}
      </div>
      <button
        className="text-edge text-red-500 py-2 px-3 w-full text-left hover:bg-pinkBg hover:rounded-b-md"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default AdminMenu;
