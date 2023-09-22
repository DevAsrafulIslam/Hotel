import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase/firebase.config";
import { toast } from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/recipe";
  const { signIn } = useContext(AuthContext);
  const auth = getAuth(app);
  // Google
  const GoogleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const googleUser = result.user;
        if (googleUser) {
          toast.success("Google signed in successfully");
        }
        console.log(googleUser);
      })
      .catch((error) => console.log(error));
  };
  // GitHub
  const GithubProvider = new GithubAuthProvider();
  const handleGithubSignIn = () => {
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        const githubUser = result.user;
        if (githubUser) {
          toast.success("GitHub Login Success");
        }
        console.log(githubUser);
      })
      .catch((error) => console.error(error));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        console.log(loggedUser);
        navigator(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div>
                <p>
                  Do't have an Account?
                  <Link className=" text-blue-600 link-hover" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex flex-col w-full border-opacity-50"></div>
        </div>
        <div className="divider">OR</div>
        <>
          <button
            onClick={handleGoogleSignIn}
            className="bg-primary  text-white px-16 py-2 rounded-3xl"
          >
            Google Sign-in
          </button>
          <button
            onClick={handleGithubSignIn}
            className="bg-primary text-white px-16 py-2 rounded-3xl"
          >
            GitHub Sign-in
          </button>
        </>
      </div>
    </div>
  );
};

export default Login;
