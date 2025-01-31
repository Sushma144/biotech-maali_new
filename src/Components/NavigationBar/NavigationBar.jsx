import React, { useState, useEffect } from "react";
import { FaRegUser, FaRegHeart, FaChevronDown } from "react-icons/fa";
import {
  MdOutlineShoppingBag,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { IoWalletOutline, IoSearch } from "react-icons/io5";
import { TbCurrentLocation } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Slice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { Popper, Box, Fade } from "@mui/material";
import SignIn from "../../Pages/SignIn/Signin";
import Verification from "../../Pages/Verification/Verification";
import Login from "../../Pages/Login/Login";
import WalletActivation from "../../Components/WalletActivation/WalletActivation";
import logo from "../../../src/Assets/Biotech-Maali.png";
import empty from "../../Assets/Cart.png";
import { IoIosLogOut } from "react-icons/io";
import WithoutLoginHamburger from "../../Components/WithoutLoginHamburger/WithoutLoginHamburger";
import LogoutGif from "../../Assets/logout.gif";
import { resetVerification } from "../../redux/User/verificationSlice";
import { clearLocalStorage } from "../../Services/Services/LocalStorageServices";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import ClickAwayListener from "@mui/material/ClickAwayListener";
const NavBar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [openPopper, setOpenPopper] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);

  const username = useSelector((state) => state.user.username);
  // console.log("username", username);
  const verificationName = useSelector(
    (state) => state.verification?.user?.first_name
  );
  // console.log("verificationName Rahul?", verificationName);

  // useEffect(()=>{
  //   console.log(username)
  // },[username])

  // ======================addcart======================
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const modal = params.get("modal"); // Check query parameter 'modal'
    // console.log(modal,'=================cart');

    if (modal === "signIn") setIsSignInOpen(true);
    if (modal === "verification") setIsVerificationOpen(true);
    if (modal === "login") setIsLoginOpen(true);
  }, [location]);
  // ======================
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleWalletClick = () => {
    if (username === "Guest") {
      setIsWalletPopupOpen(true);
    } else {
      navigate("/profile/Wallet");
    }
  };

  const handleGetOtpClick = () => {
    setIsSignInOpen(false);
    setIsVerificationOpen(true);
  };

  const handleVerificationSubmit = () => {
    setIsVerificationOpen(false);
    setIsLoginOpen(true);
  };

  const toggleDropdown = () => {
    if (username !== "Guest") {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleLogOutClick = () => {
    setIsDropdownOpen(false);
    setIsLogoutDialogOpen(true);
  };

  const handleLogOutConfirm = () => {
    dispatch(logout());
    dispatch(resetVerification());
    clearLocalStorage();
    setIsLogoutDialogOpen(false);
  };

  const handleCancelLogout = () => {
    setIsLogoutDialogOpen(false);
  };

  const handleWishListClick = (event) => {
    if (username === "Guest") {
      setAnchorEl(event.currentTarget);
      setOpenPopper(true);
    } else {
      navigate("/WishList");
    }
  };

  const handleSignIn = () => {
    setOpenPopper(false);
    setIsSignInOpen(true);
  };

  const handleLoginSuccess = () => {
    setIsSignInOpen(false);
    navigate("/WishList");
  };

  const handleCartClick = () => {
    if (username === "Guest") {
      setIsCartOpen(true);
    } else {
      navigate("/Cart");
    }
  };

  const handleClickAway = (event) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      // Prevent closing if the click is on the anchor element
      return;
    }
    setOpenPopper(false); // Close the Popper
  };

  return (
    <div className="">
      <nav className="w-full px-4 py-3 bg-white shadow-sm font-sans">
        <div className="max-w-full mx-auto flex items-center justify-between sm:justify-between md:ml-10">
          {/* Mobile: Hamburger and Logo */}
          <div className="sm:hidden flex justify-left items-center space-x-4 ">
            <WithoutLoginHamburger />
            <Link to="/">
              <img
                src={logo}
                alt="Biotech Maali Logo"
                className="w-[102px] h-[65px] "
              />
            </Link>
          </div>

          {/* Desktop: Logo */}
          <div className="hidden sm:flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Biotech Maali Logo"
                className="w-full h-auto"
              />
            </Link>
          </div>

          {/* Desktop: Search bar */}
          <div className="flex-1 max-w-full mx-4 px-10 hidden sm:block ">
            <div className="relative ">
              <IoSearch className="absolute left-3 top-1/2  transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="w-[90%] pl-10 pr-4 py-2  bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center md:space-x-10 space-x-4 md:pr-10 pr-0 mr-25">
            <button
              className="flex flex-col items-center text-gray-600 hover:text-bio-green pr-4"
              onClick={handleWishListClick}
            >
              <FaRegHeart className="text-3xl" />
            </button>
            <button
              className="flex flex-col items-center text-gray-600 hover:text-bio-green pr-4"
              onClick={handleCartClick}
            >
              <MdOutlineShoppingBag className="text-3xl" />
            </button>
            <button
              className={`${
                isMobile ? "hidden" : "flex"
              } flex-col items-center text-gray-600 hover:text-bio-green sm:flex pr-4`}
              onClick={handleWalletClick}
            >
              <IoWalletOutline className="text-3xl" />
            </button>
            <div className="relative hidden sm:flex gap-4">
              
              {username === "Guest" ? (
                <button
                  className="flex items-center space-x-2 text-gray-500 hover:text-black"
                  onClick={() => setIsSignInOpen(true)}
                >
                  <FaRegUser className="text-xl" />
                  <span className="font-medium">Guest</span>
                </button>
              ) : (
                <button
                  className="flex items-center justify-between px-4 py-2 bg-bio-green text-white rounded-md hover:bg-bio-green-100 w-40"
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center space-x-2">
                    <FaRegUser className="text-xl" />
                    <span className="font-medium">{username}</span>
                  </div>
                  <FaChevronDown className="text-base" />
                </button>
              )}

              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 bg-white rounded-lg shadow-lg w-40 z-50 border border-gray-100">
                  <ul className="py-1">
                    <li className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                      <Link to="/profile" className="flex items-center w-full">
                        <FaRegUser className="mr-3 text-gray-600 text-lg" />
                        <span className="text-gray-700">My Profile</span>
                      </Link>
                    </li>
                    <li className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                      <Link
                        to="/profile/notification"
                        className="flex items-center w-full"
                      >
                        <MdOutlineNotificationsActive className="mr-3 text-gray-600 text-lg" />
                        <span className="text-gray-700">Notifications</span>
                      </Link>
                    </li>

                    <li className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer ">
                      <Link
                        to="/profile/trackorder"
                        className="flex items-center w-full"
                      >
                        <TbCurrentLocation className="mr-3 text-gray-600 text-lg" />
                        <span className="text-gray-700">Track Order</span>
                      </Link>
                    </li>
                    <li
                      className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer"
                      onClick={handleLogOutClick}
                    >
                      <IoIosLogOut className="mr-3 text-gray-600 text-lg" />
                      <span className="text-gray-700">Logout</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: Search bar */}
        <div className="block sm:hidden mt-3">
          <div className="relative">
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full pl-10 pr-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </nav>

      {isSignInOpen && (
        <SignIn
          onClose={() => setIsSignInOpen(false)}
          onGetOtpClick={handleGetOtpClick}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {isVerificationOpen && (
        <Verification
          onClose={() => setIsVerificationOpen(false)}
          onSubmit={handleVerificationSubmit}
        />
      )}

      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}

      {isWalletPopupOpen && (
        <WalletActivation onClose={() => setIsWalletPopupOpen(false)} />
      )}

{/* =================handlesignin======= */}
<ClickAwayListener onClickAway={handleClickAway}>
      <div> {/* Wrap the Popper with a parent container */}
        <Popper
          open={openPopper}
          anchorEl={anchorEl}
          placement="bottom"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Box
                sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
                className="w-80 p-4 mt-10 shadow-lg rounded-lg"
              >
                <p className="text-center text-md">
                  To add or view items in your wishlist, please sign in first.
                </p>
                <div className="text-center mt-4">
                  <button
                    onClick={handleSignIn}
                    className="bg-white text-green-500 border border-green-500 px-4 py-2 rounded-md hover:bg-green-100"
                  >
                    Sign In
                  </button>
                </div>
              </Box>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>

      {isLogoutDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <h3 className="text-lg font-semibold mb-4">Logout</h3>
            <div className="mb-4">
              {/* Replace 'your-gif-file.gif' with the actual path to your GIF */}
              <img src={LogoutGif} alt="Logout" className="mx-auto w-40" />
            </div>
            <p className="text-gray-700 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-around">
              <button
                className="bg-gray-300 px-4 py-2 rounded text-gray-800 hover:bg-gray-400"
                onClick={handleCancelLogout}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
                onClick={handleLogOutConfirm}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <img src={empty} alt="Empty Cart" className="mx-auto mb-4" />
            <h2 className="text-lg font-semibold mb-4">
              Your cart is currently empty
            </h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => setIsCartOpen(false)}
            >
              Add Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
