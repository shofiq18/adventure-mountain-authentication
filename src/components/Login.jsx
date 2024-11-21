
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";




const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/")
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            });


    }

    return (

        <div className="flex justify-center items-center my-12 ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">


                    <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-50  lg:w-[500px] py-6 mt-6  shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            {error.login && (
                                <label className="label text-re">
                                    {error.login}
                                </label>
                            )}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500">Login</button>
                        </div>
                    </form>
                    <p className="text-center">or</p>
                    <div className="form-control mt-4 px-8">

                        <button className="btn font-normal border-green-300 "> <span className="mr-4 text-xl"><FcGoogle />

                        </span> Login with Google</button>
                    </div>
                    <button></button>
                    <p className="ml-4 mt-4 text-base text-center text-gray-600">Don't have an Account? <Link className="text-red-400 border-b" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;