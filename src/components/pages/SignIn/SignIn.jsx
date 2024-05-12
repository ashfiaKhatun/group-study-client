import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";


const SignIn = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const submitSignIn = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        signInUser(email, password)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success...",
                    text: "Sign In Successful!!!",
                    
                  });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => toast.error('Invalid email or password'))
        e.target.reset();

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success...",
                    text: "Sign In Successful!!!",
                    
                  });
                navigate(location?.state ? location.state : '/');
            })
            .catch( error => console.log(error))
    }



    return (
        <>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center mb-6">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={submitSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full" required />

                                    <span className="absolute top-4 right-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-800 hover:bg-cyan-950 text-white">Sign In</button>
                            </div>
                        </form>

                        <div className="px-8 mb-4">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full ">Google</button>
                        </div>

                        <div className="text-center mb-2">
                            <p>New here? Please <Link to='/signup'><button className="btn btn-link">Sign Up</button></Link></p>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>

        </>
    );
};

export default SignIn;