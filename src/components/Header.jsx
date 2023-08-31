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
    <div className="navbar bg-neutral sticky">
      <div className="flex-1">
        {/* <img className="w-12" src="/logo.svg"  /> */}
        <h1 className="text-4xl text-[#05c8f9]">𝓗𝓞𝓣𝓔𝓛̽̒̂</h1>
        <Link to="/" className="btn btn-ghost text-white normal-case text-md">
          Home
        </Link>
        <Link
          to="/login"
          className="btn btn-ghost text-white normal-case text-md"
        >
          Login
        </Link>
        <Link
          to="/order"
          className="btn btn-ghost text-white normal-case text-md"
        >
          Orders
        </Link>
        <Link
          to="/register"
          className="btn btn-ghost text-white normal-case text-md"
        >
          Register
        </Link>
        {user && (
          <Link
            to="/profile"
            className="btn btn-ghost text-white normal-case text-md"
          >
            Profile
          </Link>
        )}
        {user ? (
          <div className="gap-4 flex">
            <span className="text-[#05c8f9]">{user.email}</span>
            <button
              onClick={handleLogout}
              className="text-white hover:text-[#086bdc]"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-ghost text-white normal-case text-md"
          >
            Login
          </Link>
        )}
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered h-8 w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
