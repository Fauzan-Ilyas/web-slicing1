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
          <h1 className="text-5xl font-semibold mb-5">
            The <span className="text-blue-700">#1</span> site real estate
          </h1>
          <h1 className="text-5xl font-semibold mb-10">professionals trust*</h1>

          <p className="text-sm max-w-md">
            {selectedOption === "Sale"
              ? "Explore properties for sale — starting from just $10/day with limited-time deals."
              : "Find your next rental — starting as low as $10/day with special discounts."}
          </p>

          <div className="flex mt-6 space-x-6">
            <button
              className={`pb-1 border-b-2 ${
                selectedOption === "Sale" ? "border-black font-semibold" : "border-transparent"
              }`}
              onClick={() => setSelectedOption("Sale")}
            >
              Sale
            </button>
            <button
              className={`pb-1 border-b-2 ${
                selectedOption === "Rent" ? "border-black font-semibold" : "border-transparent"
              }`}
              onClick={() => setSelectedOption("Rent")}
            >
              Rent
            </button>
          </div>

          <div className="mt-8 w-full max-w-2xl">
            <div className="search bg-white py-3 px-4 rounded-full flex flex-col md:flex-row items-center gap-4 md:gap-3 shadow-md">
              {/* Dropdown Type */}
              <div className="relative">
                <div
                  className="type flex items-center justify-between border border-gray-300 py-2 px-5 rounded-full cursor-pointer w-48"
                  onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                >
                  <p>{selectedType}</p>
                  <FontAwesomeIcon icon={faSortDown} className="ml-2 text-sm" />
                </div>
                {showTypeDropdown && (
                  <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md w-48 z-10 text-left">
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

              {/* Search */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row items-center gap-3 w-full"
              >
                <div className="flex px-4 py-2 border border-gray-300 rounded-full w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Enter Keywords..."
                    className="focus:outline-none w-full"
                  />
                </div>
                <button className="px-6 py-2 border border-gray-300 rounded-full">
                  Filters
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-600"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
