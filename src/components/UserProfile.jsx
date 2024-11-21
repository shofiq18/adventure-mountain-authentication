import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Link } from "react-router-dom";


const UserProfile = () => {
    const {user} = useContext(AuthContext);


    return (

        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="max-w-xl mx-auto my-20  rounded-lg shadow-lg p-6 bg-white border border-gray-200">
            <div className="flex flex-col items-center pt-12 space-y-4 pb-12">
                {/* Profile Image */}
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                        <img
                            src={user.photoURL}
                            alt="Profile"
                        />
                    </div>
                </div>

                {/* Badge */}
                <span className="mt-4 badge badge-primary px-3 py-1">Pro</span>

                {/* Name and Title */}
                <h3 className="text-xl text-green-500">Congratulations</h3>
                <h2 className=" text-xl font-semibold">{user.displayName}</h2>
                <p>Email: {user.email}</p>

                {/* Action Buttons */}
                <div className="form-control mt-6">
                   <Link to="/update"> <button className="btn bg-green-500 mt-4">Update Profile</button></Link>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;