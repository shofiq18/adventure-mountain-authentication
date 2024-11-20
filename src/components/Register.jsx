import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";




const Register = () => {


    const handleRegister = e => {
        e.preventDefault();


        // get form data 

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log({name, photo, email, password});
    
    }
    return (
        <div>

            <div className="flex justify-center items-center my-12 ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-50  lg:w-[500px] py-6 mt-6  shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input type="text" placeholder=" photo-url" name="photo" className="input input-bordered" required />
                            </div>
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-500">Register</button>
                            </div>
                        </form>
                        <p className="text-center">or</p>
                        <div className="form-control mt-4 px-8">

                            <button className="btn font-normal border-green-300 "> <span className="mr-4 text-xl"><FcGoogle />

                            </span> Login with Google</button>
                        </div>
                        <button></button>
                        <p className="ml-4 mt-4 text-base text-center text-gray-600">Already have an Account? <Link className="text-red-400 border-b" to="/login"> Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;