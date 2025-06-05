

const Hero1 = () => {
  return (
    <div className="bg-[url('/assets/images/hero1.jpg')] bg-cover bg-center h-screen w-full">
        <div className="container mx-auto">
                <div className="hero flex flex-col h-screen w-full justify-center items-center">
                  <h1 className="text-5xl font-semibold mb-5">Discover a place you'll</h1>
                  <h1 className="text-5xl font-semibold mb-10">love to live</h1>
                  <div className="text-center">
                  <p className="text-sm">Pellentesque egestas elementum egestas faucibus sem. Velit nunc</p>
                  <p className="text-sm">egestas ut morbi. Leo diam diam</p>
                  </div>
                  <button className="bg-blue-700 mt-5 px-6 py-3 rounded-lg text-white text-sm">
                    View Properties →
                  </button>
                </div>
              </div>
    </div>
  )
}

export default Hero1