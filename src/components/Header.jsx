import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-neutral px-8  sticky">
      <div className="flex-1">
        {/* <img className="w-12" src="/logo.svg"  /> */}
        <h1 className="text-4xl text-[#05c8f9]">𝐻𝒪𝒯𝐸𝐿 𝑅𝑒𝓁𝒶𝓍</h1>
        <Link to="/" className="btn btn-ghost text-white normal-case text-md">
          Home
        </Link>

        <Link
          to="/order"
          className="btn btn-ghost text-white normal-case text-md"
        >
          Orders
        </Link>
        {user && (
          <Link
            to="/profile"
            className="btn btn-ghost text-white normal-case text-md"
          >
            Profile
          </Link>
        )}
        <Link
          to="/about"
          className="btn btn-ghost text-white normal-case text-md"
        >
          About Us
        </Link>
        {/* <Link
          to="/register"
          className="btn btn-ghost text-white normal-case text-md"
        >
          Register
        </Link> */}
      </div>
      {user ? (
        <div className="gap-4 flex">
          <span className="text-[#05c8f9]">{user.displayName}</span>
          <button
            onClick={handleLogout}
            className=" text-red-500 hover:text-white"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="btn btn-ghost text-[#086bdc] hover:text-white normal-case text-md"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
