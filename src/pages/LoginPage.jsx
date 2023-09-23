import { useContext } from "react";
import {
  Form,
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { loginUser, googleLoginUser, githubLoginUser } =
    useContext(AuthContext);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";


  
  /* ----------Functions-------------------*/
  const handleLoginForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((userCredential) => {
        toast.success("Successfully Login");
        const user = userCredential.user;
        console.log("Logged successful", user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Failed to login");
      });
  };

  const handleGoogleBtn = () => {
    googleLoginUser()
      .then((result) =>
        console.log("Google sign in successful =>", result.user)
      )
      .catch((error) => {
        console.log(error.message);
        toast.error("Failed to login");
      });
  };

  const handleGithubBtn = () => {
    githubLoginUser()
      .then((result) => {
        console.log("github signer loggin =>", result.user);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Failed to login");
      });
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
      </Form>
      <div className="mx-auto w-1/3 border-2 flex gap-5 justify-center items-center  py-5">
        <button
          type="submit"
          className="btn bg-blue-400 hover:bg-blue-500 w-1/3 text-white"
          onClick={handleGoogleBtn}
        >
          Google
        </button>
        <p>or</p>
        <button
          type="submit"
          className="btn bg-indigo-400 hover:bg-indigo-500 w-1/3 text-white"
          onClick={handleGithubBtn}
        >
          GitHub
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
