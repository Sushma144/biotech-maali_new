import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { selectAccessToken } from "../../redux/User/verificationSlice";
import { isMobile } from "react-device-detect";
// import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";

const TrendingCard = ({ name, price, oldPrice, imageUrl, product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const accessToken = useSelector(selectAccessToken);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [isAdded, setIsAdded] = useState(false);

  const [inWishlist, setInWishlist] = useState(false);
  const fetchWishlistStatus = async () => {
    try {
      if (!product?.id || !accessToken) {
        console.warn("Missing product ID or access token");
        return;
      }

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/order/wishlist/?main_product_id_list=true`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Include the user token for authentication
          },
        }
      );

      console.log(response.data, "Response for wishlist status");

      // Update logic based on the actual API response format
      const wishlistIds = response.data.main_product_ids || [];
      setInWishlist(wishlistIds.includes(product.id));
    } catch (error) {
      console.error("Error fetching wishlist status:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchWishlistStatus();
    }
  }, [product?.id, isAuthenticated, accessToken]);

  const handleAddToWishlist = async (e) => {
    e.stopPropagation();

    try {
      if (!isAuthenticated) {
        if (isMobile) {
          navigate("/mobile-signin", { replace: true });
        } else {
          navigate("/?modal=signIn", { replace: true });
        }
        return;
      }

      // Send only the product_id to the API
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/order/wishlist/`,
        { main_prod_id: product.id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Include the user token for authentication
          },
        }
      );
      fetchWishlistStatus();

      // Handle the response, e.g., show a success message or update state
      console.log("Item added to wishlist:", response.data);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error(
        "There was an error adding the item to the wishlist:",
        error
      );
    }
  };

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setIsAdded(!isAdded); // Prevents the event from propagating to parent elements

    // Check if the user is authenticated
    if (!isAuthenticated) {
      if (isMobile) {
        navigate("/mobile-signin", { replace: true });
      } else {
        navigate("/?modal=signIn", { replace: true });
      }
      return;
    }

    try {
      // Send the product id to the API to add to the cart
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/order/cart/`,
        { main_prod_id: product.id }, // Send only the product id

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Include the user token for authentication
          },
        }
      );

      // Handle the response, e.g., show a success message or update state
      console.log("Item added to the cart:", response.data);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("There was an error adding the item to the cart:", error);
    }
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <Paper
      elevation={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        width: { xs: "80%", sm: "14rem" },
        height: "23rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "white",
        borderRadius: "12px",
        border: "1px solid transparent",
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-8px)",
          backgroundColor: "#C2FFC7",
          border: "1px solid #e5e7eb",
        },
      }}
    >
      <div className="relative w-full flex flex-col items-center p-2">
        <div className="relative w-full flex justify-center mb-6">
          <img
            className={`w-40 h-44 sm:w-52 sm:h-59 object-contain rounded-lg transition-transform duration-300 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            src={`${process.env.REACT_APP_API_URL}${imageUrl}`}
            alt={name}
          />
          <div
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 transition-all duration-300 z-20 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* <button
              onClick={handleAddToCart}
              className="w-8 h-8 rounded-full bg-white hover:bg-bio-green
               hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <MdOutlineShoppingBag className="w-4 h-4" />
            </button>
         */}

            <button
              onClick={handleAddToCart}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer
        ${isAdded ? "bg-bio-green text-white" : "bg-white hover:bg-bio-green hover:text-white"}`}
            >
              <MdOutlineShoppingBag className="w-4 h-4" />
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`w-8 h-8 rounded-full ${
                inWishlist
                  ? "bg-bio-green text-white"
                  : "bg-white hover:bg-bio-green hover:text-white"
              } flex items-center justify-center transition-colors duration-200 cursor-pointer`}
            >
              {inWishlist ? (
                <FaHeart className="w-4 h-4" />
              ) : (
                <FaRegHeart className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={handleQuickView}
              className="w-8 h-8 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <FiEye className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="p-4 w-full">
          <h3 className="text-sm sm:text-md font-semibold mt-2">{name}</h3>
          <div className="flex flex-col justify-center items-center mt-2">
            <p className="text-sm font-medium text-black">₹{price}.00</p>
            {oldPrice && (
              <p className="text-sm text-gray-400 line-through">
                ₹{oldPrice}.00
              </p>
            )}
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default TrendingCard;
