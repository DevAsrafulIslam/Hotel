import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-neutral sticky">
      <div className="flex-1">
        <Link className="btn btn-ghost text-white normal-case text-md">
          HOTEL
        </Link>
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
          to="/register"
          className="btn btn-ghost text-white normal-case text-md"
        >
          Register
        </Link>
        <Link
          to="/profile"
          className="btn btn-ghost text-white normal-case text-md"
        >
          Profile
        </Link>
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
