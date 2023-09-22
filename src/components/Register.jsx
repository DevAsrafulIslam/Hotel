import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase/firebase.config";

const Register = () => {
  // Sign in with Google
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
      })
      .catch((error) => console.log("error", error.message));
  };

  // Sign in with GitHub
  const GitHubProvider = new GithubAuthProvider();
  const handleGithubSignIn = () => {
    signInWithPopup(auth, GitHubProvider)
      .then((result) => {
        const githubUser = result.user;
        console.log(githubUser);
      })
      .catch((error) => console.log(error));
  };

  const { user, createUser } = useContext(AuthContext);
  console.log(createUser);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        console.log(loggedUser);
      })
      .catch((error) => console.log("error", error.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Please!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                Already have an Account?
                <Link
                  to="/login"
                  className="label-text-alt text-primary text-[18px] link link-hover"
                >
                  Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
        <div className="divider">Or</div>
        <button
          className="bg-primary text-white px-16 py-2 rounded-3xl"
          onClick={handleGoogleSignIn}
        >
          Google Sign-in
        </button>
        <button
          className="bg-primary text-white px-16 py-2 rounded-3xl"
          onClick={handleGithubSignIn}
        >
          GitHub Sign-in
        </button>
      </div>
    </div>
  );
};

export default Register;
