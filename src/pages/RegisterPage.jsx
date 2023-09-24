import { useContext } from "react";
import { Form, Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);
  const [confirmPass, setConfirmPass] = useState(false);

  const navigate=useNavigate()

  // const [inputValue,setInputValue]=useState("")
  // console.log(createUser)
  const handleRegisterForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;
    if (password !== confirm) {
      setConfirmPass(true);
      return;
    }
    console.log(name, photo, password, confirm, email);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User successfully created an Account", user);
        toast.success("Successfully Register");
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message)
      });
      
  };
  return (
    <div className="mt-10">
      <Form
        onSubmit={handleRegisterForm}
        className="mx-auto w-1/3 border-2 flex flex-col justify-center items-center gap-6 py-5"
      >
        <h2 className="text-center text-4xl font-bold py-2">Register Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo Url"
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
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          required
          
          className="input input-bordered w-full max-w-xs"
        />
        {confirmPass && (
          <div className="text-red-500 font-">Password doesnot match</div>
        )}
        <div>
          Already Have an Account ?
          <Link to="/login" className="text-blue-500 underline">
            Go to Login
          </Link>
        </div>
        <button
          type="submit"
          className="btn bg-orange-400 hover:bg-orange-500 w-1/3 text-white"
        >
          Register
        </button>
      </Form>
    </div>
  );
};

export default RegisterPage;
