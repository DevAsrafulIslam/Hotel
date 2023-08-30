import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    const name = form.name.value;
    console.log(name);
    const email = form.email.value;
    console.log(email);
    const password = form.password.value;
    console.log(password);
    console.log(name, email, password);
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
      </div>
    </div>
  );
};

export default Register;
