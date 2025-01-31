import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/Slice/cartSlice";
import { addtowishlist } from "../../../redux/Slice/addtowishlistSlice";
import { buyitnow } from "../../../redux/Slice/buyitnowSlice";
import { useNavigate } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productdata from "../../../Assets/PlantProduct/Peacelilly.png";
import ProductSeller from "./ProductSeller";
import ProductReviews from "./ProductReviews";
import FaqAccordion from "./ProductFaq";
import ProductFeatured from "./ProductFeatured";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AddOnProduct from "./AddOnProduct";
import axios from "axios";
import { Link } from "react-router-dom";
import { selectAccessToken } from "../../../redux/User/verificationSlice";
import { isMobile } from "react-device-detect";
import AboutTheProducts from "../ProductData/AboutTheProducts";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
// import { Button } from "@mui/material";
const productData = {
  name: "Peace Lily Plant",
  prices: {
    "2ft": 399.0,
    "4ft": 499.0,
    "6ft": 599.0,
  },
  originalPrices: {
    "2ft": 499.0,
    "4ft": 599.0,
    "6ft": 699.0,
  },
  rating: 4,
  images: [productdata, productdata, productdata, productdata],
  sizes: ["2ft", "4ft", "6ft"],
  planters: {
    "2ft": ["Mini Pot", "Small Roma", "Small Diamond"],
    "4ft": ["Medium Pot", "Medium Roma", "Medium Diamond", "Medium Spira"],
    "6ft": [
      "Large Pot",
      "Large Roma",
      "Large Diamond",
      "Large Spira",
      "XL Roma",
    ],
  },
  planterSizes: {
    "2ft": ["2ft", "2.5ft", "3ft"],
    "4ft": ["4ft", "4.5ft", "5ft"],
    "6ft": ["6ft", "6.5ft", "7ft"],
  },
  colors: {
    "2ft": {
      "Mini Pot": ["white", "beige", "gray"],
      "Small Roma": ["terracotta", "black", "green"],
      "Small Diamond": ["silver", "gold", "rose gold"],
    },
    "4ft": {
      "Medium Pot": ["white", "black", "blue", "green"],
      "Medium Roma": ["terracotta", "gray", "brown", "green"],
      "Medium Diamond": ["silver", "gold", "copper", "black"],
      "Medium Spira": ["white", "black", "silver", "gold"],
    },
    "6ft": {
      "Large Pot": ["white", "black", "gray", "brown", "green"],
      "Large Roma": ["terracotta", "black", "gray", "green", "blue"],
      "Large Diamond": ["silver", "gold", "rose gold", "black", "white"],
      "Large Spira": ["white", "black", "silver", "gold", "copper"],
      "XL Roma": ["terracotta", "gray", "brown", "green", "blue"],
    },
  },
  description:
    "Are you a sucker for succulents? Then the Mini Jade succulent will be your dream plant! As one of the easiest houseplants to look after, the Crassula Green Mini plant boasts a lush foliage which beautifies any room. The Jade is also considered lucky as per Feng Shui for its coin-like round plump leaves. So, go ahead and bring Jade home... luck just tags along!",
  addOns: [
    { name: "Peace Lily Plant", price: 499.0, image: productdata },
    { name: "Snake Plant", price: 399.0, image: productdata },
    { name: "Monstera Deliciosa", price: 599.0, image: productdata },
    { name: "Aloe Vera", price: 299.0, image: productdata },
  ],
};

export default function Component() {
  const [selectedImage, setSelectedImage] = useState(0);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPlanterSize, setSelectedPlanterSize] = useState("");
  const [selectedPlanter, setSelectedPlanter] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [quantity, setQuantity] = useState(1);
  // const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [productDetailData, setProductDetailData] = useState([]);
  const [imageThumbnails, setImageThumbnails] = useState([]);
  const { id } = useParams(); // Retrieve the ID from the URL

  // ==========auth cart
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  useEffect(() => {
    if (productDetailData?.data?.product) {
      const { size_id, planter_size_id, planter_id, color_id } =
        productDetailData.data.product;

      console.log(color_id, "================color id");

      setSelectedSize(
        productDetailData?.data?.product_sizes?.find(
          (s) => s.id === size_id || s.size === size_id
        ) || ""
      );
      setSelectedPlanterSize(
        productDetailData?.data?.product_planter_sizes?.find(
          (s) =>
            s.id === planter_size_id ||
            s.size === planter_size_id.size ||
            s.name === planter_size_id.name
        ) || ""
      );
      setSelectedPlanter(
        productDetailData?.data?.product_planters?.find(
          (s) => s.id === planter_id || s.name === planter_id.name
        ) || ""
      );

      const selectedColor = productDetailData.data.product_colors.find(
        (color) => color.id === Number(color_id) // Ensure color_id is a number
      );
      setSelectedColor(selectedColor || ""); // Default to an empty string if no match is found
    }
  }, [productDetailData]);

  console.log("productDetailData selectedSize", selectedSize);
  console.log("productDetailData selectedPlanterSize", selectedPlanterSize);
  console.log("productDetailData selectedPlanter", selectedPlanter);
  console.log(
    "productDetailData selectedColor",
    selectedColor,
    "=================",
    productDetailData?.data?.product_colors
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedSize && productData.planters[selectedSize]) {
      const availablePlanters = productData.planters[selectedSize];
      const newPlanter = availablePlanters[0] || "";
      setSelectedPlanter(newPlanter);

      if (
        newPlanter &&
        productData.colors[selectedSize] &&
        productData.colors[selectedSize][newPlanter]
      ) {
        const availableColors = productData.colors[selectedSize][newPlanter];
        setSelectedColor(availableColors[0] || "");
      } else {
        setSelectedColor("");
      }
    }
  }, [selectedSize]);

  useEffect(() => {
    if (
      selectedSize &&
      selectedPlanter &&
      productData.colors[selectedSize] &&
      productData.colors[selectedSize][selectedPlanter]
    ) {
      const availableColors = productData.colors[selectedSize][selectedPlanter];
      setSelectedColor(availableColors[0] || "");
    } else {
      setSelectedColor("");
    }
  }, [selectedPlanter, selectedSize]);

  useEffect(() => {
    if (selectedSize && productData.planterSizes[selectedSize]) {
      const availablePlanterSizes = productData.planterSizes[selectedSize];
      setSelectedPlanterSize(availablePlanterSizes[0] || "");
    }
  }, [selectedSize]);

  // const availablePlanters = productData.planters[selectedSize] || [];
  // const availableColors =
  //   (productData.colors[selectedSize] &&
  //     productData.colors[selectedSize][selectedPlanter]) ||
  //   [];
  // const availablePlanterSizes = productData.planterSizes[selectedSize] || [];

  // const handleAddOnToggle = (addon) => {
  //   setSelectedAddOns((prevAddOns) => {
  //     if (prevAddOns.some((item) => item.name === addon.name)) {
  //       return prevAddOns.filter((item) => item.name !== addon.name);
  //     } else {
  //       return [...prevAddOns, addon];
  //     }
  //   });
  // };

  const handleAddToCartSubmit = async () => {
    if (isAuthenticated) {
      console.log("Sending data to backend accessToken cart:", accessToken);

      const product_data = {
        prod_id: productDetailData?.data?.product?.id,
        quantity: quantity,
      };

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/order/cart/`,
          product_data,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Include authentication token if required
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response from server:", response.data);

        // Dispatch the Redux action to update the cart in the state
        dispatch(addToCart(product_data));
        // alert('Product added to cart!');
      } catch (error) {
        console.error(
          "Error adding product to cart:",
          error.response?.data || error.message
        );
        // alert('Failed to add product to cart. Please try again.');
      }
    } else {
      // Redirect to login page based on device type
      // alert('Please login to add items to your cart.');
      if (isMobile) {
        navigate("/mobile-signin", { replace: true });
      } else {
        navigate("/?modal=signIn", { replace: true });
      }
    }
  };

  const handleAddToWishlistSubmit = async () => {
    if (isAuthenticated) {
      const product_id = productDetailData?.data?.product?.id;

      try {
        // Send only the product_id to the API
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/order/wishlist/`,
          { prod_id: product_id },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Include the user token for authentication
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(addtowishlist(product_id));
        console.log("Wishlist Response:", response.data);
        enqueueSnackbar("Product added to wishlist!", { variant: "success" }); // Show success message
      } catch (error) {
        console.error(
          "Error adding product to wishlist:",
          error.response?.data || error.message
        );
        enqueueSnackbar(
          "Failed to add product to wishlist. Please try again.",
          { variant: "error" }
        ); // Show error message
      }
    } else {
      enqueueSnackbar("Please login to add items to your wishlist.", {
        variant: "info",
      }); // Show login message
      if (isMobile) {
        navigate("/mobile-signin", { replace: true });
      } else {
        navigate("/?modal=signIn", { replace: true });
      }
    }
  };

  const handleBuyItNowSubmit = async () => {
    console.log(isAuthenticated);

    if (isAuthenticated) {
      console.log(
        "Sending data to backend  cart:",
        productDetailData?.data?.product?.id,
        "quantity:",
        quantity
      );

      const product_data = {
        product: productDetailData?.data?.product?.id,
        quantity: quantity,
      };

      // If user is authenticated, add the item to the cart
      dispatch(buyitnow(product_data));
      navigate("/checkout");
      // alert('Product BuyItNow!', product_data);
    } else {
      // If not authenticated, redirect based on device type
      alert("Please login to add items to your BuyItNow.");
      if (isMobile) {
        navigate("/mobile-signin", { replace: true });
      } else {
        navigate("/?modal=signIn", { replace: true });
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/product/defaultProduct/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;

        const images = data?.data?.product?.images || [];
        // console.log("Data from server===sizes:", data, "=================");
        setImageThumbnails(images);
        setProductDetailData(data);
        // console.log("Fetched Images:", images);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]); // Include `id` in the dependency array.

  useEffect(() => {
    // console.log("Updated Image ssThumbnails:", imageThumbnails);
  }, [imageThumbnails]); // Log updated thumbnails whenever they change.

  const calculateTotalPrice = () => {
    let total = (productData.prices[selectedSize] || 0) * quantity;
    selectedAddOns.forEach((addon) => {
      total += addon.price;
    });
    return total;
  };

  const CustomPrevArrow = ({ className, onClick }) => (
    <button className={`${className} z-10 left-0`} onClick={onClick}>
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );

  const CustomNextArrow = ({ className, onClick }) => (
    <button className={`${className} z-10 right-0`} onClick={onClick}>
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  // console.log("Product Data:", productDetailData);
  // console.log("Product Data:",productDetailData?.data?.product);

  const handleSizeClick = async (size, product) => {
    try {
      // Set the selected size
      setSelectedSize(size);

      // Make API call to filter products by size
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/filterProduct/${product?.id}/`,
        {
          params: {
            size_id: size.id,
            // planter_size_id: product.planter_size_id,
            // planter_id: product.planter_id,
            // product_colors_id: product.color_id,
          },
        }
      );

      // If the same size is clicked again, toggle the selection (deselect)
      if (selectedSize?.size === size?.size) {
        setSelectedSize(null); // Deselect the size
      } else {
        setSelectedSize(size); // Select the new size
      }

      // Handle the API response
      const data = response.data;
      console.log("Filtered Products:", response.data);
      const images = data?.data?.product?.images || [];
      console.log("Data from server===sizes:", data, "=================");
      setImageThumbnails(images);
      setProductDetailData(data);

      // You can update state or perform additional actions with the filtered products
    } catch (error) {
      console.error("Error fetching filtered products:", error);
      // Handle error scenarios
    }
  };

  const handlePlanterSizeClick = async (size, product) => {
    try {
      // Set the selected size
      setSelectedPlanterSize(size);

      // Make API call to filter products by size
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/filterProduct/${product.id}/`,
        {
          params: {
            planter_size_id: size.id,
            size_id: product.size_id,
            // planter_id: product.planter_id,
            // product_colors_id: product.color_id,
          },
        }
      );
      // If the same size is clicked again, toggle the selection (deselect)
      if (selectedPlanterSize?.size === size?.size) {
        setSelectedPlanterSize(null); // Deselect the size
      } else {
        setSelectedPlanterSize(size); // Select the new size
      }
      // Handle the API response
      const data = response.data;
      console.log("Filtered Products:", response.data);
      const images = data?.data?.product?.images || [];
      console.log("Data from server===sizes:", data, "=================");
      setImageThumbnails(images);
      setProductDetailData(data);

      // You can update state or perform additional actions with the filtered products
    } catch (error) {
      console.error("Error fetching filtered products:", error);
      // Handle error scenarios
    }
  };

  const handlePlanterClick = async (planter, product) => {
    try {
      // Set the selected size
      setSelectedPlanter(planter, id);
      // If the same planter is clicked again, toggle the selection (deselect)
      if (selectedPlanter?.id === planter?.id) {
        setSelectedPlanter(null); // Deselect the planter
      } else {
        setSelectedPlanter(planter); // Select the new planter
      }
      // Make API call to filter products by size
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/filterProduct/${product.id}/`,
        {
          params: {
            planter_id: planter.id,
            planter_size_id: product.planter_size_id,
            size_id: product.size_id,
            // product_colors_id: product.color_id,
          },
        }
      );

      // Handle the API response
      const data = response.data;
      console.log("Filtered Products:", response.data);
      const images = data?.data?.product?.images || [];
      console.log("Data from server===sizes:", data, "=================");
      setImageThumbnails(images);
      setProductDetailData(data);

      // You can update state or perform additional actions with the filtered products
    } catch (error) {
      console.error("Error fetching filtered products:", error);
      // Handle error scenarios
    }
  };

  const handlePlanterColorClick = async (color, product) => {
    try {
      // Set the selected size
      setSelectedColor(color);
      // If the same color is clicked again, toggle the selection (deselect)
      if (selectedColor?.id === color?.id) {
        setSelectedColor(null); // Deselect the color
      } else {
        setSelectedColor(color); // Select the new color
      }
      // Make API call to filter products by size
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/filterProduct/${product.id}/`,
        {
          params: {
            color_id: color.id,
            planter_id: product.planter_id,
            planter_size_id: product.planter_size_id,
            size_id: product.size_id,
          },
        }
      );

      // Handle the API response
      const data = response.data;
      console.log("Filtered Products:", response.data);
      const images = data?.data?.product?.images || [];
      console.log("Data from server===sizes:", data, "=================");
      setImageThumbnails(images);
      setProductDetailData(data);

      // You can update state or perform additional actions with the filtered products
    } catch (error) {
      console.error("Error fetching filtered products:", error);
      // Handle error scenarios
    }
  };

  return (
    <div className="container mx-auto px-14 py-8 font-sans">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="flex justify-center h-auto bg-gray-50">
            <div className="w-full h-full md:w-full md:h-1/2 rounded-lg bg-gray-100">
              <img
                src={
                  imageThumbnails[selectedImage]?.image ||
                  productData.images[0].image
                }
                alt={`Product view ${selectedImage + 1}`}
                className="w-30 h-30 object-fill"
              />
            </div>
          </div>

          <div className="flex items-center mb-4 mt-6">
            {/* Left Navigation Button */}
            <button
              onClick={() =>
                setSelectedImage((prev) =>
                  prev === 0 ? productData.images.length - 1 : prev - 1
                )
              }
              className="text-gray-500 hover:text-gray-800 focus:outline-none px-2"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* ==================== */}
            <div className="flex flex-1 overflow-x-auto">
              {imageThumbnails.slice(1).map((image, i) => (
                <div className="flex-1 px-2" key={i + 1}>
                  <button
                    onClick={() => setSelectedImage(i + 1)}
                    className={`focus:outline-none w-full rounded-lg h-3/4 md:h-3/4 bg-gray-100 flex items-center justify-center ${
                      selectedImage === i + 1
                        ? "ring-2 ring-indigo-300 ring-inset"
                        : ""
                    }`}
                  >
                    <img
                      src={image.image}
                      alt={`${productData.name} ${i + 2}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={() =>
                setSelectedImage((prev) =>
                  prev === productData.images.length - 1 ? 0 : prev + 1
                )
              }
              className="text-gray-500 hover:text-gray-800 focus:outline-none px-2"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="md:flex-1 px-4 font-sans">
          <h2 className="text-xl font-bold mb-2">
            {productDetailData?.data?.product?.main_product_name || ""}
          </h2>
          <h4 className="text-md  font-sans mb-4">
            {productDetailData?.data?.product?.short_description || ""}
          </h4>
          <p className="text-black-600 text-sm mb-4">
            {Array.from({ length: 5 }).map((_, i) => {
              const fraction =
                productDetailData?.data?.product_rating?.avg_rating || 0;
              const filled = Math.floor(fraction);
              const half = fraction - filled;
              return (
                <React.Fragment key={i}>
                  {i < filled && (
                    <FaStar className="inline-block text-bio-green" />
                  )}
                  {i === filled && half > 0 && (
                    <FaStarHalfAlt className="inline-block text-bio-green" />
                  )}
                  {i >= filled + half && (
                    <FaStar className="inline-block text-gray-300" />
                  )}
                </React.Fragment>
              );
            })}
          </p>
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold text-bio-green text-lg">
                ₹{productDetailData?.data?.product?.price || 0}
                {/* ₹{productData.prices[selectedSize]} */}
              </span>
              <span className="text-black-400 text-sm line-through ml-2">
                {/* ₹{productData.originalPrices[selectedSize]} */}₹
                {productDetailData?.data?.product?.price || 0}
              </span>
            </div>
          </div>

          {/* ============================= */}
          <div className="space-y-6">
            <div className="mb-4">
              <span className="font-bold text-black-700">
                Select Plant Size:
              </span>
              <div className="flex items-center mt-2">
                {productDetailData?.data?.product_sizes?.map((size) => (
                  <button
                    key={size?.id || size?.size}
                    onClick={() =>
                      handleSizeClick(size, productDetailData?.data?.product)
                    }
                    className={`${
                      selectedSize?.size === size?.size
                        ? "border-2 border-bio-green text-gray-700" // Active state with green border
                        : "border-2 border-gray-300 text-black" // Default state with gray border
                    } py-2 px-4 rounded-lg mr-2 focus:outline-none`}
                  >
                    {size?.size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="font-bold text-black-700">
                Select Planter Size:
              </span>
              <div className="flex items-center mt-2">
                {productDetailData?.data?.product_planter_sizes?.map((size) => (
                  <button
                    key={size?.id || size?.size}
                    onClick={() =>
                      handlePlanterSizeClick(
                        size,
                        productDetailData?.data?.product
                      )
                    }
                    className={`${
                      selectedPlanterSize?.size === size?.size
                        ? "border-2 border-bio-green text-gray-700" // Active state with green border
                        : "border-2 border-gray-300 text-black" // Default state with gray border
                    } py-2 px-4 rounded-lg mr-2 focus:outline-none`}
                  >
                    {size?.size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="font-bold text-black-700">Select Planter:</span>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {productDetailData?.data?.product_planters?.map((planter) => (
                  <button
                    key={planter?.id || planter?.name}
                    onClick={() =>
                      handlePlanterClick(
                        planter,
                        productDetailData?.data?.product
                      )
                    }
                    className={`${
                      selectedPlanter?.id === planter?.id
                        ? "border-2 border-bio-green text-gray-700" // Active state with green border
                        : "border-2 border-gray-300 text-black" // Default state with gray border
                    } py-2 px-4 rounded-lg text-sm mr-2 focus:outline-none`}
                  >
                    {planter?.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="font-bold text-black-700">Color: </span>
              
              <div className="flex items-center mt-2">
                {productDetailData?.data?.product_colors?.map((color) => (
                  <button
                    key={color?.id || color?.color_code}
                    onClick={() => handlePlanterColorClick(color)}
                    className={`w-8 h-8 rounded-full mr-2 focus:outline-none ${
                      selectedColor?.id === color?.id
                        ? "border-2 border-bio-green text-gray-700" // Active state with green border
                        : "border-2 border-gray-300 text-black" // Default state with gray border
                    }`}
                    style={{ backgroundColor: color?.color_code }}
                    aria-label={`Select ${color?.name || "color"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <span className=" font-bold text-black-700">Quantity:</span>
            <div className="flex items-center mt-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border border-bio-green text-black-700 py-2 px-4 rounded-l-lg hover:bg-green-400"
              >
                -
              </button>
              <span className=" border border-bio-green bg-gray-200 text-black py-2 px-4">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border border-bio-green text-black-700 py-2 px-4 rounded-r-lg hover:bg-bio-green"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex mb-8">
            <button
              className=" border border-bio-green text-bio-green py-2 px-4 rounded-lg mr-2 hover:bg-bio-green hover:text-white"
              onClick={handleAddToCartSubmit}
            >
              <ShoppingCart className="inline-block mr-2" />
              <Link to="/Cart">Add To Cart</Link>
            </button>
            <button
              className="border border-bio-green text-bio-green py-2 px-4 rounded-lg mr-2 hover:bg-bio-green hover:text-white"
              onClick={handleAddToWishlistSubmit}
            >
              <Heart className="inline-block mr-2" />
              <Link to="/wishlist">Add To Wishlist</Link>
            </button>
          </div>
          <button
            className="bg-bio-green text-white py-2 px-4 rounded-lg w-full hover:bg-bio-green"
            onClick={handleBuyItNowSubmit}
          >
            <Link to="/checkout" className="w-full h-full">
              Buy It Now
            </Link>
          </button>

          <AddOnProduct />
        </div>
      </div>

      {/* pincode */}
      <div className="mt-2 flex">
        <input
          type="text"
          placeholder="Enter Pin Code"
          className="w-1/3 p-1 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-green-500 ml-auto"
        />
        <button className="px-12 py-4 bg-bio-green text-white rounded-r hover:bg-green-700">
          Check
        </button>
      </div>
      <br />
      <AboutTheProducts productDetailData={productDetailData} />

      <ProductFeatured />
      <ProductSeller />
      <FaqAccordion />
      {productDetailData?.data?.product_rating && (
        <ProductReviews
          product_Rating={productDetailData?.data?.product_rating}
          total_Rating={productDetailData?.data?.product_reviews}
        />
      )}
    </div>
  );
}
