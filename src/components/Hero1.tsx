const Hero1 = () => {
  return (
    <div className="bg-[url('/assets/images/hero1.jpg')] bg-cover bg-center h-screen w-full">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="hero flex flex-col h-screen w-full justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 sm:mb-4">
            Discover a place you'll
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8">
            love to live
          </h1>
          <div className="text-sm sm:text-base space-y-1 mb-6">
            <p>Pellentesque egestas elementum egestas faucibus sem. Velit nunc</p>
            <p>egestas ut morbi. Leo diam diam</p>
          </div>
          <button className="bg-blue-700 hover:bg-blue-800 transition px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-white text-sm sm:text-base">
            View Properties →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
