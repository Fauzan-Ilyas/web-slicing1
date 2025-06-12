const Properties = () => {
  return (
    <div className="w-full mt-32 mb-80 px-4">
      <h1 className="text-center text-3xl font-semibold mb-3 w-full max-w-xl mx-auto">
        Our mission is to redefine real estate in the customer's favor.
      </h1>
      <p className="text-center text-sm mb-10">Lorem ipsum dolor sit amet</p> 
      
      <div className="card flex flex-wrap justify-center gap-6">
        {[
          { number: "5.2M", title: "Owned from properties transactions" },
          { number: "7K+", title: "Properties For Buy" },
          { number: "4K+", title: "Properties Buy Sell" },
          { number: "221+", title: "Daily Completed Transactions" },
        ].map((item, index) => (
          <div key={index} className="w-full sm:w-60 relative">
            <div className="p-6 text-sm bg-gray-200 rounded-xl h-full">
              <h1 className="font-semibold text-2xl text-red-500 mb-5">{item.number}</h1>
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-xs">Pellentesque egestas elementum egestas faucibus sem.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;