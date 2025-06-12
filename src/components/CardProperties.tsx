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

  <div className="card flex flex-wrap justify-center gap-4 px-8">
    {[Card1, Card2, Card3, Card4, Card5].map((img, idx) => {
      const titles = ["Town House", "Modern Villa", "Apartment", "Single Family", "Office"];
      const counts = ["2", "10", "3", "5", "3"];
      return (
        <div
          key={idx}
          className="relative w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 transition-all duration-300"
        >
          <div className="absolute p-4 sm:p-5 text-sm z-10">
            <h3 className="font-semibold drop-shadow-md">{titles[idx]}</h3>
            <p className="text-xs drop-shadow-md">{counts[idx]} Properties</p>
          </div>
          <img
            src={img}
            alt={titles[idx]}
            className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      );
    })}
  </div>
</div>

  )
}

export default CardProperties