import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [selectedOption, setSelectedOption] = useState<"Sale" | "Rent">("Sale");
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState("Type");

  const propertyTypes = ["House", "Apartment", "Villa", "Office"];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setShowTypeDropdown(false);
  };

  return (
    <div className="bg-[url('/assets/images/hero.jpg')] bg-cover bg-center h-screen w-full">
      <div className="container mx-auto px-4">
        <div className="hero flex flex-col h-screen w-full justify-center items-center text-center">
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">
            The <span className="text-blue-700">#1</span> site real estate
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-10">
            professionals trust*
          </h1>

          {/* PARAGRAPH */}
          <p className="text-xs sm:text-sm md:text-base max-w-md">
            {selectedOption === "Sale"
              ? "Explore properties for sale — starting from just $10/day with limited-time deals."
              : "Find your next rental — starting as low as $10/day with special discounts."}
          </p>

          {/* SALE/RENT TOGGLE */}
          <div className="flex mt-4 sm:mt-6 space-x-4 sm:space-x-6 text-sm sm:text-base">
            <button
              className={`pb-1 border-b-2 ${
                selectedOption === "Sale"
                  ? "border-black font-semibold"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedOption("Sale")}
            >
              Sale
            </button>
            <button
              className={`pb-1 border-b-2 ${
                selectedOption === "Rent"
                  ? "border-black font-semibold"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedOption("Rent")}
            >
              Rent
            </button>
          </div>

          {/* WRAPPER LEBAR DINAMIS */}
          <div className="mt-6 sm:mt-8 px-[2px] w-full flex justify-center">
            <div className="mt-6 sm:mt-8 px-[2px] w-full flex justify-center">
              <div className="mt-6 sm:mt-8 w-full flex justify-center px-2 sm:px-4 md:px-6">
                <div className="search bg-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-full flex items-center gap-2 md:gap-4 shadow-md w-full max-w-3xl">
                  {/* Dropdown */}
                  <div className="relative min-w-[100px] sm:min-w-[120px]">
                    <div
                      className="flex items-center justify-between border border-gray-300 py-1 px-3 rounded-full cursor-pointer"
                      onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                    >
                      <p className="text-sm sm:text-base md:text-lg">
                        {selectedType}
                      </p>
                      <FontAwesomeIcon
                        icon={faSortDown}
                        className="ml-2 text-xs sm:text-sm"
                      />
                    </div>
                    {showTypeDropdown && (
                      <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md w-full z-10 text-left text-sm">
                        {propertyTypes.map((type) => (
                          <li
                            key={type}
                            onClick={() => handleTypeSelect(type)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {type}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Search form */}
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex items-center gap-2 w-full"
                  >
                    <div className="flex px-3 py-1 border border-gray-300 rounded-full w-full">
                      <input
                        type="text"
                        placeholder="Enter Keywords..."
                        className="focus:outline-none w-full text-sm sm:text-base md:text-lg"
                      />
                    </div>
                    <button className="px-3 py-1 border border-gray-300 rounded-full text-sm sm:text-base md:text-lg whitespace-nowrap">
                      Filters
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 bg-blue-700 text-white rounded-full hover:bg-blue-600 text-sm sm:text-base md:text-lg whitespace-nowrap"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
