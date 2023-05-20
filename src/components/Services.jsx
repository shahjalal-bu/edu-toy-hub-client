import { FaMoneyBillAlt, FaTruck, FaRegSmile } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <div className="mb-4">
              <FaMoneyBillAlt className="w-16 h-16 mx-auto text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cash on Delivery</h3>
            <p>Pay cash at your doorstep</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <div className="mb-4">
              <FaTruck className="w-16 h-16 mx-auto text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Delivery</h3>
            <p>All over Bangladesh</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <div className="mb-4">
              <FaRegSmile className="w-16 h-16 mx-auto text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Happy Return</h3>
            <p>7 days return facility</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
