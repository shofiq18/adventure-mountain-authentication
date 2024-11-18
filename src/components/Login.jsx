

const Login = () => {
    return (
        <div className="flex justify-center items-center my-12 ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card bg-base-50  lg:w-[500px] py-6 mt-6  shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;