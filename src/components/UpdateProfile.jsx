import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";

const UpdateProfile = () => {
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();
    const auth = getAuth();

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        if (!auth.currentUser) {
            setError("User is not logged in.");
            return;
        }

        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            });

            setSuccess("Profile updated successfully!");
            navigate("/user"); 
        } catch (error) {
            setError("Failed to update profile. Please try again.");
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div>
            <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="flex justify-center items-center my-12"
            >
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            Update Your Profile!
                        </h1>
                    </div>
                    <div className="card bg-base-50 lg:w-[500px] py-6 mt-6 shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleUpdateProfile}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    className="input input-bordered"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your photo URL"
                                    name="photo"
                                    className="input input-bordered"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                            {success && <p className="text-green-500 mt-2">{success}</p>}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-green-500">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
