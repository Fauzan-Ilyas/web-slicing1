import Home1 from "../../public/assets/images/home1.jpg";
import Logo1 from "../../public/assets/images/amazon.png";
import Logo2 from "../../public/assets/images/amda.png";
import Logo3 from "../../public/assets/images/cisco.png";
import Logo4 from "../../public/assets/images/dropcom.png";
import Logo5 from "../../public/assets/images/logitech.png";
import Logo6 from "../../public/assets/images/spotify.png";

const LastCard = () => {
  return (
    <div className="w-full mt-32 mb-32 px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row justify-between lg:mx-32 items-center gap-10">
        {/* gambar duluan di kiri */}
        <img
          src={Home1}
          alt=""
          className="w-full lg:w-1/2 rounded-xl object-cover"
        />

        {/* teks di kanan */}
        <div className="w-full lg:w-1/2">
          <div className="mt-8 lg:mt-16 lg:ml-12 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-5">
              Why You Should Work With Us
            </h1>
            <h3 className="text-sm mb-7 text-gray-600">
              Pellentesque egestas elementum egestas faucibus sem. Velit nunc
              egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
              Mi mauris nulla ac dictum ut mauris non.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row lg:ml-12 gap-6 sm:gap-10 text-center sm:text-left mt-4">
            <div className="sm:w-1/2">
              <h3 className="font-semibold mb-2">Buy or Rent Homes</h3>
              <p className="text-xs text-gray-600">
                We sell your home at the best market price and very quickly as well.
              </p>
            </div>
            <div className="sm:w-1/2">
              <h3 className="font-semibold mb-2">Trusted by Thousands</h3>
              <p className="text-xs text-gray-600">
                We offer you free consultancy to get a loan for your new home.
              </p>
            </div>
          </div>
          <div className="lg:ml-12 text-center lg:text-left">
            <button className="bg-blue-700 mt-8 px-6 py-3 rounded-lg text-white text-sm">
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* logo partner */}
      <div className="text-center mt-24">
        <p className="text-sm mb-6">Thousands of world’s leading companies trust Space</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 place-items-center mx-auto max-w-4xl">
          <img src={Logo1} alt="" className="w-16 sm:w-20" />
          <img src={Logo2} alt="" className="w-16 sm:w-20" />
          <img src={Logo3} alt="" className="w-16 sm:w-20" />
          <img src={Logo4} alt="" className="w-16 sm:w-20" />
          <img src={Logo5} alt="" className="w-16 sm:w-20" />
          <img src={Logo6} alt="" className="w-16 sm:w-20" />
        </div>
      </div>
    </div>
  );
};

export default LastCard;
