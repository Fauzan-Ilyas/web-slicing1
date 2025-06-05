import Card1 from "../../public/assets/images/card1.jpg"
import Card2 from "../../public/assets/images/card2.jpg"
import Card3 from "../../public/assets/images/card3.jpg"
import Card4 from "../../public/assets/images/card4.jpg"
import Card5 from "../../public/assets/images/card5.jpg"

const CardProperties = () => {
  return (
    <div className="w-full mt-32">
        <h1 className="text-center text-3xl font-semibold mb-3">Explore Our Properties</h1>
        <p className="text-center text-sm mb-10">Lorem ipsum dolor sit amet</p> 
        <div className="card flex items-center justify-center m-5">
            <div className="box m-5 w-44 relative">
                <div className="absolute p-6 text-sm">
                    <h3 className="font-semibold">Town House</h3>
                    <p className="text-xs">2 Properties</p>
                </div>
                <img src={Card1} alt="" className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
            <div className="box m-5 w-44 relative">
                <div className="absolute p-6 text-sm">
                    <h3 className="font-semibold">Modern Villa</h3>
                    <p className="text-xs">10 Properties</p>
                </div>
                <img src={Card2} alt="" className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
            <div className="box m-5 w-44 relative">
                <div className="absolute p-6 text-sm">
                    <h3 className="font-semibold">Apartment</h3>
                    <p className="text-xs">3 Properties</p>
                </div>
                <img src={Card3} alt="" className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
            <div className="box m-5 w-44 relative">
                <div className="absolute p-6 text-sm">
                    <h3 className="font-semibold">Single Family</h3>
                    <p className="text-xs">5 Properties</p>
                </div>
                <img src={Card4} alt="" className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
            <div className="box m-5 w-44 relative">
                <div className="absolute p-6 text-sm">
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-xs">3 Properties</p>
                </div>
                <img src={Card5} alt="" className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
        </div>
    </div>
  )
}

export default CardProperties