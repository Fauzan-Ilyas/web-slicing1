import Home1 from "../../public/assets/images/home1.jpg";
import Logo1 from "../../public/assets/images/amazon.png";
import Logo2 from "../../public/assets/images/amda.png";
import Logo3 from "../../public/assets/images/cisco.png";
import Logo4 from "../../public/assets/images/dropcom.png";
import Logo5 from "../../public/assets/images/logitech.png";
import Logo6 from "../../public/assets/images/spotify.png";

const LastCard = () => {
  return (
     <div className="w-full mt-32 mb-32">
      <div className="flex justify-between mx-32">
        <img src={Home1} alt="" className="w-1/2 rounded-xl" />
        <div className="my-5">
          <div className="mt-16 ml-28">
            <h1 className="text-3xl font-semibold mb-5">Why You Should Work With Us</h1>
            <h3 className="text-sm mb-7">Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.</h3>
          </div>
          <div className="flex ml-28">
            <div className="mr-3">
                <h3 className="font-semibold mb-4">Buy or Rent Homes</h3>
                <p className="text-xs">We sell your home at the best market price and very quickly as well.</p>
            </div>
            <div className="ml-3">
                <h3 className="font-semibold mb-4">Trusted by Thousands</h3>
                <p className="text-xs">We offer you free consultancy to get a loan for your new home.</p>
            </div>
          </div>
          <button className="bg-blue-700 ml-28 mt-10 px-6 py-3 rounded-lg text-white text-sm">
            Learn More →
          </button>
        </div>
      </div>
      <div className="text-center mt-40">
        <p className="text-sm">Thousands of world’s leading companies trust Space</p>
        <div className="logo flex items-center justify-evenly mx-20 mt-10">
          <img src={Logo1} alt="" className="w-20" />
          <img src={Logo2} alt="" className="w-20" />
          <img src={Logo3} alt="" className="w-20" />
          <img src={Logo4} alt="" className="w-20" />
          <img src={Logo5} alt="" className="w-20" />
          <img src={Logo6} alt="" className="w-20" />
        </div>
      </div>
    </div>
  )
}

export default LastCard