import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";

// Modal Component
const Modal = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                {children}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

// Main AdventureDetails Component
const AdventureDetails = () => {
    const mountain = useLoaderData();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleTalkWithExpert = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 10 && currentHour < 20) {
            // Open Google Meet in a new tab
            window.open("https://meet.google.com/", "_blank");
        } else {
            // Show the modal
            setModalOpen(true);
        }
    };

    if (!mountain) {
        return <p>Adventure not found!</p>;
    }

    return (
        <div className=" px-3  lg:flex justify-start gap-12   max-w-7xl mx-auto my-12 bg-gray-100 p-5 shadow-xl rounded-2xl ">

            <div>
                <img
                    className="w-full mb-4 h-[300px] lg:h-[480px] object-cover rounded-lg "
                    src={mountain.image}
                    alt={mountain.title}
                />
            </div>
            <div>

                <h1 className="text-3xl font-bold mb-4">{mountain.title}</h1>

                <h2 className="text-2xl font-semibold">Cost: ${mountain.adventureCost}</h2>
                <p className="text-lg text-gray-600 mt-2">{mountain.shortDescription}</p>
                <h3 className="text-xl font-bold mt-5">Eco-Friendly Features:</h3>
                <ul className="list-disc list-inside text-gray-700">
                    {mountain.ecoFriendlyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <h3 className="text-xl font-bold mt-5">Included Items:</h3> 
                <ul className="list-disc list-inside text-gray-700">
                    {mountain.includedItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/* Talk with Expert Button */}
                <button
                    onClick={handleTalkWithExpert}
                    className="mt-6 btn bg-blue-500 text-white rounded-lg px-4 py-2"
                >
                    Talk with Expert
                </button>

                {/* Modal */}
                {isModalOpen && (
                    <Modal onClose={() => setModalOpen(false)}>
                        <h2 className="text-2xl font-bold mb-4">Consultation Hours</h2>
                        <p className="text-lg">
                            Our experts are available between <strong>10:00 AM</strong> and <strong>8:00 PM</strong>.
                            Please come back during this time or leave a message.
                        </p>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="mt-4 btn bg-gray-500 text-white rounded-lg px-4 py-2"
                        >
                            Close
                        </button>
                    </Modal>
                )}
            </div>

        </div>
    );
};

export default AdventureDetails;
