import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="grid items-center my-6 mx-auto">
      <div className="avatar flex items-center mx-auto">
        <div className="w-32  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" />
        </div>
      </div>
      {/* {user && (
        <h1 className="text-center font-extrabold text-3xl">
          {user.displayName}
        </h1>
      )} */}
      {user ? (
        <h2 className="text-center font-extrabold text-3xl mt-3 text-[#086bdc]">
          {user.displayName}
        </h2>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Profile;
