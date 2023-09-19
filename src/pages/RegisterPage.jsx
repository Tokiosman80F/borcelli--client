import { Form, Link } from "react-router-dom";

const RegisterPage = () => {
    const handleRegisterForm=()=>{}
    return (
        <div className="mt-10" >
            <Form onSubmit={handleRegisterForm} className="mx-auto w-1/3 border-2 flex flex-col justify-center items-center gap-6 py-5">
            <h2 className="text-center text-4xl font-bold py-2">Register Form</h2>
            <input type="text" name="name" placeholder="Your Name" required className="input input-bordered w-full max-w-xs" />
            <input type="text" name="photo" placeholder="Photo Url" required className="input input-bordered w-full max-w-xs" />
            <input type="password" name="passwprd" placeholder="Password" required className="input input-bordered w-full max-w-xs" />
            <input type="password" name="confirm" placeholder="Confirm Password" required className="input input-bordered w-full max-w-xs" />
            <div> Already Have an Account ?<Link to="/login" className="text-blue-500 underline">Go to Login</Link></div>
            <button type="submit" className="btn bg-orange-400 hover:bg-orange-500 w-1/3 text-white">Register</button>
            <div className="text-black">Or Sign Up with </div>
            <button type="submit" className="btn bg-blue-400 hover:bg-blue-500 w-1/3 text-white">Google</button>
            <button type="submit" className="btn bg-purple-400 hover:bg-purple-500 w-1/3 text-white">GitHub</button>
            </Form>
        </div>
    )
};

export default RegisterPage;