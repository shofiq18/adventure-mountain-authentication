import { useLocation,  } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialEmail = queryParams.get("email") || "";

    const [email, setEmail] = useState(initialEmail);

    const handleResetPassword = (e) => {
        e.preventDefault();


        console.log(`Reset password request for: ${email}`);


        window.location.href = "https://mail.google.com/";
    };

    return (
        <div>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="flex justify-center items-center my-12">
                <div className="hero-content flex-col">
                    <div className="card bg-base-50 lg:w-[500px] py-6 mt-6 shrink-0 shadow-2xl">
                        <form onSubmit={handleResetPassword} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-500">Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
