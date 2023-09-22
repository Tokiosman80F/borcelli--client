import { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLoginForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged successful", user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="mt-10">
      <Form
        onSubmit={handleLoginForm}
        className="mx-auto w-1/3 border-2 flex flex-col justify-center items-center gap-6 py-5"
      >
        <h2 className="text-center text-4xl font-bold py-2">Login Form</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <div>
          New Here ?
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </div>
        <button
          type="submit"
          className="btn bg-orange-400 hover:bg-orange-500 w-1/3 text-white"
        >
          Login
        </button>
        <div className="text-black">Or Sign In with </div>
        <button
          type="submit"
          className="btn bg-blue-400 hover:bg-blue-500 w-1/3 text-white"
        >
          Google
        </button>
        <button
          type="submit"
          className="btn bg-indigo-400 hover:bg-indigo-500 w-1/3 text-white"
        >
          GitHub
        </button>
      </Form>
    </div>
  );
};

export default LoginPage;
