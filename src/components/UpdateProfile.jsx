



const UpdateProfile = () => {

    return (
        <div>
            <h1>This is update profile</h1>
            <div className="flex justify-center items-center my-12 ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">


                        <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold">Update Your Profile!</h1>

                    </div>
                    <div className="card bg-base-50  lg:w-[500px] py-6 mt-6  shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input type="text" placeholder="photo-url" name="photo" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-500">Update</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;