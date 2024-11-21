
const Mail = () => {
    return (
        <div className=" bg-white shadow-xl px-3 lg:px-0 py-12">
            <div className="max-w-7xl mx-auto text-center ">
                <h2 className="text-xl lg:text-3xl py-12 font-bold">JOIN OUR MAILING LIST TO GET UPDATES AND OFFERS</h2>
                <input className="px-3 w-full md:w-[520px] lg:w-[720px] py-3 border border-gray-400 rounded-md" type="email" placeholder="Email address" /> <br />
                <button className="text-lg py-12">SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default Mail;