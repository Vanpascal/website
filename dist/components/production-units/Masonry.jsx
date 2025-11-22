"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const productActions_1 = require("@/app/actions/productActions");
const staffActions_1 = require("@/app/actions/staffActions");
const image_1 = __importDefault(require("next/image"));
function Masonry() {
    const [products, setProducts] = (0, react_1.useState)([]);
    const [hod, setHOD] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const getProducts = async () => {
            try {
                const data = await (0, productActions_1.fetchMasonryProducts)();
                const formattedData = data.map((product) => ({
                    id: product.id,
                    name: product.product_name,
                    price: product.price,
                    image: product.photo ? product.photo : "/images/default-product.jpg",
                }));
                setProducts(formattedData);
            }
            catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        const getHOD = async () => {
            var _a;
            try {
                const data = await (0, staffActions_1.fetchMasonryHOD)();
                if (data.length > 0) {
                    const hodData = data[0];
                    setHOD({
                        firstname: hodData.firstname,
                        lastname: hodData.lastname,
                        title: (_a = hodData.position) !== null && _a !== void 0 ? _a : "Head of Department",
                        photo: hodData.photo ? hodData.photo : "/images/default-hod.jpg",
                    });
                }
            }
            catch (error) {
                console.error("Error fetching HOD:", error);
            }
        };
        getProducts();
        getHOD();
    }, []);
    return (<div className="bg-gray-100">
      {/* Top Section: Full-Width Production Unit Image */}
      <section className="relative">
        <div className="relative w-full h-80 md:h-[400px]">
          <image_1.default src="/images/masonry.jpg" alt="Masonry and Bricklaying Production Unit" fill style={{ objectFit: "cover" }}/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Masonry and Bricklaying Production Unit
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
          {/* Left Section: Head of Production Unit */}
          {hod && (<div className="flex-shrink-0 text-center">
              <div className="relative w-80 h-80 mx-auto">
                <image_1.default src={hod.photo} alt={`${hod.firstname} ${hod.lastname}`} fill style={{ objectFit: "cover" }} className="rounded-lg shadow-lg"/>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                {`${hod.firstname} ${hod.lastname}`}
              </h3>
              <p className="text-lg text-gray-600">{hod.title}</p>
            </div>)}

          {/* Right Section: Description */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              About the Production Unit
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The Masonry and Bricklaying Production Unit is integral to our
              technical training center, providing students with hands-on
              experience in masonry and bricklaying techniques. Students learn
              to create durable and aesthetically pleasing structures while
              adhering to industry standards.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Services Offered
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Custom bricklaying and masonry work</li>
              <li>Concrete mixing and pouring</li>
              <li>Stone and brick wall construction</li>
              <li>Pathway and patio installation</li>
              <li>Repair and restoration of masonry structures</li>
            </ul>

            {/* Button Below Services */}
            <div className="mt-6 flex justify-end">
              <a href="/booking" className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300">
                Make a Booking
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-50 py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (<div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-48">
                  <image_1.default src={product.image} alt={product.name} fill style={{ objectFit: "cover" }}/>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">Price: {product.price}</p>
                    </div>
                    <a href="/cart" className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </div>);
}
exports.default = Masonry;
