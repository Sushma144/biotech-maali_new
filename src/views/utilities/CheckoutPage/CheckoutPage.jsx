
import React, { useEffect, useState } from "react";
import plant_image from "../../../Assets/PlantProduct/Peacelilly.png";
import { Tag } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { useLocation } from "react-router-dom";


// DeliveryAddress Component
const DeliveryAddress = () => {

  const [isOpen, setIsOpen] = useState(true); // Toggles visibility of the section
  const [address, setAddresses] = useState([
    {
      firstName: "Mallikjan",
      lastName: "Barrodwale",
      phone: "8884981840",
      address: "Mahalaxmi layout Nehru Nagar, Gokul road, Hubli - 58820",
      city: "Hubli",
      state: "Karnataka",
      pinCode: "58820",
      isHome: true,
      isWork: false,
      isEditing: false,
    },
  ]);
  const handleEdit = (index) => {
    setAddresses(
      address.map((address, i) =>
        i === index ? { ...address, isEditing: true } : address
      )
    );
  };

  const handleCancelEdit = (index) => {
    setAddresses(
      address.map((address, i) =>
        i === index ? { ...address, isEditing: false } : address
      )
    );
  };

  const handleSaveEdit = (index) => {
    setAddresses(
      address.map((address, i) =>
        i === index ? { ...address, isEditing: false } : address
      )
    );
  };

  const handleAddressChange = (index, field, value) => {
    setAddresses(
      address.map((address, i) =>
        i === index ? { ...address, [field]: value } : address
      )
    );
  };

  const handleAddNewAddress = () => {
    setAddresses([
      ...address,
      {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        isHome: false,
        isWork: false,
        isEditing: true,
      },
    ]);
  };

 

  const toggleDropdown = () => setIsOpen(!isOpen);

  

  return (
    <div className="bg-gray-100 p-4">
      <div
        className="bg-blue-900 text-white p-4 rounded-md cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <h2 className="font-bold flex items-center">
          <span className="bg-white text-blue-900 px-2 py-1 rounded-full mr-2">
            1
          </span>
          Delivery Address
        </h2>
      </div>

      {isOpen && (
        <div className="bg-white p-4 shadow-md rounded-md mt-2">
          <h3 className="text-lg font-bold mb-4">Address</h3>
          {address.map((address, index) => (
                <div
                  key={index}
                  className="p-4 mb-4 border rounded-lg shadow-md"
                >
                  {address.isEditing ? (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Edit Address</span>
                        <button
                          className="text-red-500 hover:text-red-700 font-semibold"
                          onClick={() => handleCancelEdit(index)}
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={address.firstName || ""}
                          onChange={(e) =>
                            handleAddressChange(
                              index,
                              "firstName",
                              e.target.value
                            )
                          }
                          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={address.lastName || ""}
                          onChange={(e) =>
                            handleAddressChange(
                              index,
                              "lastName",
                              e.target.value
                            )
                          }
                          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="text"
                          placeholder="Apartment, Suite, etc. (Optional)"
                          value={address.address || ""}
                          onChange={(e) =>
                            handleAddressChange(
                              index,
                              "address",
                              e.target.value
                            )
                          }
                          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="text"
                          placeholder="City"
                          value={address.city || ""}
                          onChange={(e) =>
                            handleAddressChange(index, "city", e.target.value)
                          }
                          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <select
                          value={address.state || ""}
                          onChange={(e) =>
                            handleAddressChange(index, "state", e.target.value)
                          }
                          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="Karnataka">Karnataka</option>
                          {/* Add more states as options */}
                        </select>
                        <input
                          type="text"
                          placeholder="PIN Code"
                          value={address.pinCode || ""}
                          onChange={(e) =>
                            handleAddressChange(
                              index,
                              "pinCode",
                              e.target.value
                            )
                          }
                          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={address.phone || ""}
                          onChange={(e) =>
                            handleAddressChange(index, "phone", e.target.value)
                          }
                          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 col-span-2"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="block font-semibold">
                          Address Type
                        </label>
                        <div className="flex space-x-4 mt-2">
                          <label>
                            <input
                              type="checkbox"
                              checked={address.isHome || false}
                              onChange={(e) =>
                                handleAddressChange(
                                  index,
                                  "isHome",
                                  e.target.checked
                                )
                              }
                              className="mr-2"
                            />
                            Home (All day Delivery)
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              checked={address.isWork || false}
                              onChange={(e) =>
                                handleAddressChange(
                                  index,
                                  "isWork",
                                  e.target.checked
                                )
                              }
                              className="mr-2"
                            />
                            Work (9am - 6pm)
                          </label>
                        </div>
                      </div>
                      <div className="flex space-x-4 mt-4">
                        <button
                          className="bg-bio-green text-white font-semibold py-2 px-4 rounded hover:bg-green-500"
                          onClick={() => handleSaveEdit(index)}
                        >
                          Save
                        </button>
                        <button
                          className="border border-bio-green text-bio-green font-semibold py-2 px-4 rounded hover:bg-green-100"
                          onClick={() => handleCancelEdit(index)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">{`${address.firstName} ${address.lastName}`}</span>
                        <button
                          className="text-bio-green font-semibold"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </button>
                      </div>
                      <p>{address.phone}</p>
                      <p>{address.address}</p>
                    </div>
                  )}
                </div>
              ))}
              
    

        {/* Deliver Here Button */}
          <div className="mt-4">
            <button className="bg-bio-green text-white px-4 py-2 rounded hover:bg-bio-green">
              Deliver Here
            </button>
          </div>

          {/* Pick From Local Store */}
          {/* <div className="mt-6">
            <div className="flex items-center">
              <input
                type="radio"
                name="delivery"
                className="w-5 h-5 text-bio-green"
              />
              <label className="ml-2 text-gray-700 text-lg">
                Pick From Local Store
              </label>
              <button className="ml-auto text-bio-green font-semibold">
                Select Location
              </button>
            </div>
          </div> */}
        </div>
      )}
    </div>
  
  );
};
// AddNewAddress Component
const AddNewAddress = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-4 mt-4">
      {/* Add New Address Header */}
      <div
        className="bg-blue-900 text-white p-4 rounded-md cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <h2 className="font-bold flex items-center">
          <span className="bg-white text-blue-900 px-2 py-1 rounded-full mr-2">
            +
          </span>
          Add New Address
        </h2>
        <span className="text-white font-bold">{isOpen ? "" : ""}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="bg-white p-4 shadow-md rounded-md mt-2">
          <h3 className="text-bio-green font-bold mb-2">Add New Address</h3>
          <form className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="First name"
                className="border p-2 rounded w-1/2"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-2 rounded w-1/2"
              />
            </div>
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="border p-2 rounded w-full"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="City"
                className="border p-2 rounded w-1/3"
              />
              <select className="border p-2 rounded w-1/3">
                <option>Karnataka</option>
                <option>Maharashtra</option>
                <option>Tamil Nadu</option>
              </select>
              <input
                type="text"
                placeholder="PIN code"
                className="border p-2 rounded w-1/3"
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              className="border p-2 rounded w-full"
            />
            <div className="flex space-x-4 items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Home (All day Delivery)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Work (9am - 6pm)
              </label>
            </div>
            {/* Buttons */}
            <div className="flex space-x-2 mt-2">
              <button
                type="button"
                className="bg-bio-green text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={toggleDropdown}
                className="border border-bio-green px-4 py-2 rounded text-bio-green"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// OrderSummaryItem Component
const OrderSummaryItem = ({ title, details, price, originalPrice, discount, savings }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex gap-4">
        <img 
          src={plant_image}
          alt={title}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{details}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">₹{price}</span>
              <span className="text-gray-500 line-through text-sm">₹{originalPrice}</span>
              <span className="text-gray-500 text-sm">({discount})</span>
            </div>
            <p className="text-bio-green text-sm">You Save ₹{savings}</p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center bg-bio-green text-white rounded-md">
                -
              </button>
              <input
                type="number"
                value="1"
                className="w-12 text-center border rounded-md"
                readOnly
              />
              <button className="w-8 h-8 flex items-center justify-center bg-bio-green text-white rounded-md">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="text-bio-green hover:text-lime-500 font-medium">
        Remove
      </button>
    </div>
  );
};

 // OrderSummary Component
const OrderSummary = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-100 p-4 mt-4">
      <div className="bg-blue-900 text-white p-4 rounded-md cursor-pointer flex justify-between items-center" 
      onClick={toggleDropdown}
      >
        <h2 className="font-bold flex items-center">
          <span className="bg-white text-blue-900 px-2 py-1 rounded-full mr-2">
            1
          </span>
          Order Summary
        </h2>
        <span className="text-white font-bold">{isOpen ? "" : ""}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div>
          <div className="divide-y divide-gray-200 mt-4">
            <OrderSummaryItem
              title="Peace Lily Plant"
              details="2ft /2ft- GroPot / Ivory"
              price="499.00"
              originalPrice="599.00"
             
            />
            <OrderSummaryItem
              title="Peace Lily Plant"
              details="2ft /2ft- GroPot / Ivory"
              price="499.00"
              originalPrice="599.00"
            
            />
          </div>
          {/* Add More Products Button */}
          <div className="flex justify-center p-4 border-t mt-4">
            <button className="bg-bio-green text-white px-6 py-2 rounded-md hover:bg-lime-400 transition-colors flex items-center gap-2">
              <span className="font-medium">Add More Products</span>
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
// DeliveryOptions Component
const DeliveryOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const deliveryOptions = [
    {
      id: 'standard',
      label: 'Standard',
      price: '₹000.00',
    },
    {
      id: 'express',
      label: 'Express Way',
      price: '₹000.00',
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-4 mt-4">
      <div className="bg-blue-900 text-white p-4 rounded-md cursor-pointer flex justify-between items-center" 
      onClick={toggleDropdown}
      >
        <h2 className="font-bold flex items-center">
          <span className="bg-white text-blue-900 px-2 py-1 rounded-full mr-2">
            2
          </span>
          Choose Delivery Option
        </h2>
        <span className="text-white font-bold">{isOpen ? "" : ""}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="bg-white p-4 shadow-md rounded-md mt-2">
          {deliveryOptions.map((option) => (
            <div key={option.id} className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="delivery-option"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="w-5 h-5 text-bio-green"
                />
                <label className="ml-2 text-gray-800">{option.label}</label>
              </div>
              <span className="text-gray-600">{option.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ApplyCoupon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const discountOffers = [
    {
      id: 1,
      discount: '10% off',
      condition: 'on orders above ₹1499'
    },
    {
      id: 2,
      discount: '45% off',
      condition: 'on orders above ₹4999'
    },
    {
      id: 3,
      discount: '45% off',
      condition: 'on orders above ₹4999'
    },
    {
      id: 4,
      discount: '30% off',
      condition: 'on orders above ₹2999'
    },
    {
      id: 5,
      discount: '20% off',
      condition: 'on orders above ₹1999'
    }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-4 mt-4">
      {/* Header */}
      <div className="bg-blue-900 text-white p-4 rounded-md cursor-pointer flex justify-between items-center" 
      onClick={toggleDropdown}
      >
        <h2 className="font-bold flex items-center">
          <span className="bg-white text-blue-900 px-2 py-1 rounded-full mr-2">
            3
            </span>
            Apply Coupon
            </h2>
            <span className="text-white font-bold">{isOpen ? "" : ""}</span>
            </div>

      {isOpen && (
        <div className="p-4">
          {/* Coupon Input */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Discount code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-100 text-blue-900 font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition-colors">
              Apply
            </button>
          </div>

          {/* Scrollable Offers Section with Hidden Scrollbar */}
          <div className="max-h-48 overflow-y-auto scrollbar-hide">
            <div className="space-y-2 pr-2">
              {discountOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="flex items-center justify-between p-4 border border-dashed rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <Tag className="text-bio-green" size={20} />
                    <div>
                      <span className="font-medium">{offer.discount}</span>
                      <span className="text-gray-600 ml-1">{offer.condition}</span>
                    </div>
                  </div>
                  <button className="text-blue-900 font-semibold hover:underline">
                    APPLY OFFER
                  </button>
                </div>
              ))}
            </div>
          </div>

          <style jsx global>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .scrollbar-hide {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState('wallet');
  const [isOpen, setIsOpen] = useState(false);
  const paymentOptions = [
    {
      id: 'wallet',
      title: 'Biotech Maali Wallet',
      description: 'Your current balance is ₹65.07.',
      type: 'checkbox'
    },
    {
      id: 'rewards',
      title: 'Biotech Maali Rewards',
      description: '25% Utilization on Cart Value',
      type: 'checkbox'
    },
    {
      id: 'razorpay',
      title: 'Razorpay Secure (UPI, Cards, Wallets,NetBanking)',
      description: (
        <div className="flex items-center gap-2 mt-1">
          <img src="/api/placeholder/40/25" alt="UPI" className="h-6" />
          <img src="/api/placeholder/40/25" alt="Visa" className="h-6" />
          <img src="/api/placeholder/40/25" alt="Mastercard" className="h-6" />
          <img src="/api/placeholder/40/25" alt="RuPay" className="h-6" />
          <span className="text-gray-500 text-sm">+16</span>
        </div>
      ),
      type: 'radio'
    },
    {
      id: 'cod',
      title: 'Cash on Delivery/Pay on Delivery',
      type: 'radio'
    }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-4 mt-4">
      <div className="bg-blue-900 text-white p-4 rounded-md cursor-pointer flex justify-between items-center" 
      onClick={toggleDropdown}
      >
        <h2 className="font-bold flex items-center">
          <span className="bg-white text-blue-900 px-2 py-1 rounded-full mr-2">
            4
          </span>
          Select a payment method
        </h2>
        <span className="text-white font-bold">{isOpen ? "" : ""}</span>
      </div>
  
      {isOpen && (
        <div className="bg-white p-4 shadow-md rounded-md mt-2">
          <div className="space-y-6">
            {paymentOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-start gap-3 cursor-pointer"
                onClick={() => option.type === 'radio' && setSelectedMethod(option.id)}
              >
                {option.type === 'checkbox' ? (
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                ) : (
                  <div className="mt-1 flex-shrink-0">
                    <div className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${selectedMethod === option.id 
                        ? 'border-green-600 bg-white' 
                        : 'border-green-600 bg-white'
                      }
                    `}>
                      {selectedMethod === option.id && (
                        <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
                      )}
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-gray-900 text-lg">{option.title}</h3>
                  {option.description && (
                    <div className="text-gray-700">
                      {option.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Proceed Button */}
          <div className="mt-6">
            <button className="bg-bio-green text-white font-medium px-8 py-3 rounded hover:bg-green-700 transition-colors">
              Proceed To Payment
            </button>
          </div>
        </div>
      )}
      </div>
  );
};


// CheckoutPage Component
const CheckoutPage = () => {

  const location = useLocation();
  const { resource } = location.state || {}; // Extract resource from state
  const [orderResource,setOrderResource] = useState(resource || {});

  console.log("Resource from state:", orderResource);

  useEffect(() => {
    if (resource) {
      setOrderResource(resource);
    }      
  },[resource]);


  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-4">
      {/* Left Side - Steps */}
      <div className="w-full lg:w-3/4">
        <div className="space-y-4">
          {/* Delivery Address Dropdown */}
          <DeliveryAddress />

          {/* Add New Address Dropdown */}
          <AddNewAddress />

          {/* Order Summary */}
          <OrderSummary />

          {/* Choose Delivery Option */}
          <DeliveryOptions />

          {/* Apply Coupon */}
         <ApplyCoupon />

          {/* Select a Payment Method */}
          <PaymentMethods />
        </div>
      </div>

      {/* Right Side - Price Details */}
      <div className="w-full lg:w-1/4 mt-6 lg:mt-4 lg:pl-6 ">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-gray-500 font-semibold mb-2">Price Details</h2>
          <hr />
          <div className="space-y-2 mt-4">
            {/* Price */}
            <div className="flex justify-between text-gray-700">
              <span>Price (3 items)</span>
              <span>₹{resource?.order_details?.grand_total}</span>
            </div>
            {/* Discount */}
            <div className="flex justify-between text-bio-green">
              <span>Discount</span>
              <span>-₹266.00</span>
            </div>
            {/* Delivery Charges */}
            <div className="flex justify-between text-gray-700">
              <span>Delivery Charges</span>
              <span>
              <span className="line-through text-gray-400">₹80</span>{" "}
                <span className="text-bio-green">Free</span>
             </span>
            </div>
            {/* Packaging Fee */}
            <div className="flex justify-between text-gray-700">
              <span>Secured Packaging Fee</span>
              <span>₹198</span>
            </div>
          </div>
          <hr className="my-4" />
          {/* Total Amount */}
          <div className="flex justify-between font-semibold text-gray-900">
            <span>Total Amount</span>
            <span>{resource?.order_details?.grand_total || 0}</span>
          </div>
          <hr className="my-4" />
          {/* Savings */}
          <div className="text-bio-green text-sm font-semibold">
            You will save ₹9,811 on this order
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;