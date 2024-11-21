




const Banner = () => {
  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="carousel w-full h-[400px] lg:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/JmYK7RZ/Hotel-Shanker-Kathmandu-Nepal-Hiking-Trekking-Himalayas-Nepal.jpg"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex  text-center  items-center justify-center">
          <h2 className="text-white text-2xl lg:text-4xl font-bold bg-black bg-opacity-50  px-4 py-2 rounded">
          Best Trekking And Tour Operator In Nepal

          </h2>
        </div>
        <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/P4x1jq3/trekking-annapurnas-nepal.jpg"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl lg:text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
            Trekking Annapurnas
          </h2>
        </div>
        <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/gD6Nw7K/trek-to-mountain.webp"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl lg:text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
            Mountain Adventures
          </h2>
        </div>
        <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/W3mtw03/Hiking-in-Nepal.webp"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl lg:text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
            Hiking in Nepal
          </h2>
        </div>
        <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
