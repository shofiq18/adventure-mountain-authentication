
const Mountain = ({ mountain }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          className="w-full h-[300px]"
          src={mountain.image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{mountain.title}</h2>
        <h3 className="text-lg text-gray-500 border-b-2 font-bold">Eco Friendly Features:</h3>
        <ol>
          {mountain.ecoFriendlyFeatures.map((eco, index) => (
            <li key={index} className="text-gray-500 text-base">{eco}</li>
          ))}
        </ol>

        <div className="card-actions py-5 ">
          <button className="btn rounded-full bg-blue-300 ">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Mountain;