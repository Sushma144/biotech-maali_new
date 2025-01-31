// import { createBrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router";
// import LandingPageLayout from "./LandingPageLayout";
// import Home from "../src/Components/Home/Home";
// import AnniversaryGifts from "../src/views/utilities/AnniversaryGifts/AnniversaryGifts";
// import BlogComponent from "../src/views/utilities/Blog/BlogComponent";
// import Carriers from "../src/views/utilities/Carriers/Carriers";
// import CheckoutPage from "../src/views/utilities/CheckoutPage/CheckoutPage";
// import ComboOffer from "../src/views/utilities/ComboOffer/ComboOffer";
// import ContactUs from "../src/views/utilities/ContactUs/ContactUs";
// import CorporateGiftingPage from "../src/views/utilities/CorperateGifting/CorporateGiftingPage";
// import FranchiseEnquires from "../src/views/utilities/FranchiseEnquires/FranchiseEnquires";
// import Gifts from "../src/views/utilities/Gifts/Gifts";
// import MyOrders from "../src/views/utilities/My Orders/MyOrders";
// import OurWork from "../src/views/utilities/OurWork/OurWork";
// import PlantFilter from "../src/views/utilities/PlantFilter/PlantFilter";
// import ProductData from "./views/utilities/ProductData/ProductData";
// import ServicesPage from "../src/Services/Service new/ServicePage";
// import Wallet from "../src/views/utilities/Wallet/Wallet";
// import WishList from "../src/views/utilities/WishList/WishList";
// import Stores from "./views/Stores/Stores";
// import SideBarLayout from "./SideBarLayout";
// import SideParrot from "./views/Users/SideBar/SideParrot";
// import ReferAFriend from "./views/Users/ReferAFriend/ReferAFriend";
// import { isMobile } from "react-device-detect";
// import MobileSidebar from "./views/utilities/MobileSidebar/MobileSidebar";
// import TrackOrder from "./views/Users/TrackOrder/TrackOrder";
// import GiftCard from "./views/Users/GiftCard/GiftCard";
// import Hamburger from "./views/utilities/Hamburger/Hamburger";
// import ProfilePage from "./views/Users/ProfilePage/ProfilePage";
// import Notification from "./views/Users/Notification/Notification";
// import Cart from "../src/views/CartProducts/Cart/Cart";
// import MobileVerification from "./MobileLogin/MobileVerification/Verification";
// import MobileSignIn from "./MobileLogin/MobileSignIn/MobileSignIn";
// import MobileLoginPage from "./MobileLogin/MobileLoginPage/MobileLoginPage";
// import Birthday from "./views/utilities/BirthdayGifts/BirthdayGifts";
// import HouseWarming from "./views/utilities/HouseWarming/HouseWarming";
// import Thankyou from "./views/utilities/Thankyou/Thankyou";
// import SeasonalCollection1 from "./views/utilities/SeasonalCollection1/SeasonalCollection1";
// import Pots from "./views/utilities/Pots/Pots";
// import Seeds from "./views/utilities/Seeds/Seeds";
// import OutdoorPlants from "./views/utilities/OutdoorPlants/OutdoorPlants";
// import FloweringPlants from "./views/utilities/FloweringPlants/FloweringPlants";
// import Featured from "./views/utilities/Featured/Featured";
// import Latest from "./views/utilities/Latest/Latest";
// import BestSeller from "./views/utilities/BestSeller/BestSeller";

// console.log("--------", isMobile);

// const desktopRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPageLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "anniversary", element: <AnniversaryGifts /> },
//       {path: "birthday" , element:<Birthday/>},
//       {path: "housewarming" , element:<HouseWarming/>},
//       { path: "thankyou", element: <Thankyou/> },
//       { path: "blogcomponent", element: <BlogComponent /> },
//       { path: "carriers", element: <Carriers /> },
//       { path: "checkout", element: <CheckoutPage /> },
//       { path: "combooffer", element: <ComboOffer /> },
//       { path: "contactus" , element: <ContactUs/> },
//       { path: "corporate", element: <CorporateGiftingPage /> },
//       { path: "franchiseenquery", element: <FranchiseEnquires /> },
//       { path: "gifts", element: <Gifts /> },
//       { path: "orders", element: <MyOrders /> },
//       { path: "ourwork", element: <OurWork /> },
//       { path: "filter", element: <PlantFilter /> },
//       {path:  "seasonal" , element: <SeasonalCollection1/>},
//       {path: "pots" , element: <Pots/>},
//       {path: "seeds" , element: <Seeds/>},
//       {path: "outdoor" , element: <OutdoorPlants/>},
//       {path: "Flower" , element: <FloweringPlants/>},
//       {path: "feature" , element: <Featured/>},
//       {path: "latest" , element: <Latest/>},
//       {path: "bestseller" , element: <BestSeller/>},
//       { path: "productdata", element: <ProductData /> },
//       { path: "services", element: <ServicesPage /> },
//       { path: "wishlist", element: <WishList /> },
//       { path: "wallet", element: <Wallet /> },
//       { path: "stores", element: <Stores /> },
//       { path: "hamburger", element: <Hamburger /> },
//       { path: "side", element: <SideParrot /> },
//       { path: "cart", element: <Cart /> },
//     ],
//   },
//   {
//     path: "profile",
//     element: <SideBarLayout />,
//     children: [
//       { path: "", element: <ProfilePage /> },
//       { path: "trackorder", element: <TrackOrder /> },
//       { path: "notification", element: <Notification /> },
//       { path: "giftcard", element: <GiftCard /> },
//       { path: "wallet", element: <Wallet /> },
//       { path: "referal", element: <ReferAFriend /> },
//     ],
//   },
// ]);

// const mobileRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPageLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "mobile-signin", element: <MobileSignIn /> },
//       { path: "mobile-verification", element: <MobileVerification /> },
//       { path: "mobile-login", element: <MobileLoginPage /> },
//       { path: "services", element: <ServicesPage /> },
//       { path: "ourwork", element: <OurWork /> },
//       { path: "franchiseenquery", element: <FranchiseEnquires /> },
//       { path: "contactus", element: <ContactUs /> },
//       { path: "carriers", element: <Carriers /> },
//       { path: "side", element: <SideParrot /> },
//       { path: "cart", element: <Cart /> },
//       { path: "wishlist", element: <WishList /> },
//       { path: "combooffer", element: <ComboOffer /> },
//       { path: "gifts", element: <Gifts /> },
//       { path: "anniversary", element: <AnniversaryGifts /> },
//       { path: "checkout", element: <CheckoutPage /> },
//       { path: "productdata", element: <ProductData /> },
//       { path: "stores", element: <Stores /> },
//       { path: "orders", element: <MyOrders /> },
//       { path: "filter", element: <PlantFilter /> },
//     ],
//   },
//   {
//     path: "profile",
//     element: <MobileSidebar />,
//   }, // Render Mobile specific sidebar layout
//   {
//     path: "profile/myprofile",
//     element: <ProfilePage />,
//   },
//   {
//     path: "profile/trackorder",
//     element: <TrackOrder />,
//   },
//   {
//     path: "profile/notification",
//     element: <Notification />,
//   },
//   {
//     path: "profile/wallet",
//     element: <Wallet />,
//   },
//   {
//     path: "profile/referal",
//     element: <ReferAFriend />,
//   },
//   {
//     path: "profile/giftcard",
//     element: <GiftCard />,
//   },
// ]);

// export const App = () => {
//   return <RouterProvider router={isMobile ? mobileRouter : desktopRouter} />;
// };

// export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import LandingPageLayout from './LandingPageLayout';
import Home from '../src/Components/Home/Home';
import AnniversaryGifts from '../src/views/utilities/AnniversaryGifts/AnniversaryGifts';
import BlogComponent from '../src/views/utilities/Blog/BlogComponent';
import Carriers from '../src/views/utilities/Carriers/Carriers';
import CheckoutPage from '../src/views/utilities/CheckoutPage/CheckoutPage';
import ComboOffer from '../src/views/utilities/ComboOffer/ComboOffer';
import ContactUs from '../src/views/utilities/ContactUs/ContactUs';
import CorporateGiftingPage from '../src/views/utilities/CorperateGifting/CorporateGiftingPage';
import FranchiseEnquires from '../src/views/utilities/FranchiseEnquires/FranchiseEnquires';
import Gifts from '../src/views/utilities/Gifts/Gifts';
import MyOrders from '../src/views/utilities/My Orders/MyOrders';
import OurWork from '../src/views/utilities/OurWork/OurWork';
import PlantFilter from '../src/views/utilities/PlantFilter/PlantFilter';
import ProductData from './views/utilities/ProductData/ProductData';
import ServicesPage from '../src/Services/Service new/ServicePage';
import Wallet from '../src/views/utilities/Wallet/Wallet';
import WishList from '../src/views/utilities/WishList/WishList';
import Stores from './views/Stores/Stores';
import SideBarLayout from './SideBarLayout';
import SideParrot from './views/Users/SideBar/SideParrot';
import ReferAFriend from './views/Users/ReferAFriend/ReferAFriend';
import MobileSidebar from './views/utilities/MobileSidebar/MobileSidebar';
import TrackOrder from './views/Users/TrackOrder/TrackOrder';
import GiftCard from './views/Users/GiftCard/GiftCard';
import Hamburger from './views/utilities/Hamburger/Hamburger';
import ProfilePage from './views/Users/ProfilePage/ProfilePage';
import Notification from './views/Users/Notification/Notification';
import Cart from '../src/views/CartProducts/Cart/Cart';
import MobileVerification from './MobileLogin/MobileVerification/Verification';
import MobileSignIn from './MobileLogin/MobileSignIn/MobileSignIn';
import MobileLoginPage from './MobileLogin/MobileLoginPage/MobileLoginPage';
import Birthday from './views/utilities/BirthdayGifts/BirthdayGifts';
import HouseWarming from './views/utilities/HouseWarming/HouseWarming';
import Thankyou from './views/utilities/Thankyou/Thankyou';
import SeasonalCollection1 from './views/utilities/SeasonalCollection1/SeasonalCollection1';
import Pots from './views/utilities/Pots/Pots';
import Seeds from './views/utilities/Seeds/Seeds';
import OutdoorPlants from './views/utilities/OutdoorPlants/OutdoorPlants';
import FloweringPlants from './views/utilities/FloweringPlants/FloweringPlants';
import Featured from './views/utilities/Featured/Featured';
import Latest from './views/utilities/Latest/Latest';
import BestSeller from './views/utilities/BestSeller/BestSeller';
import EcommerceGiftCard from './views/utilities/E-GiftCard/EcommerceGiftCard';
import PlantCare from './views/utilities/PlantCare/PlantCare';
import RakshaBhandan from './views/utilities/RakshaBhandan/RakshaBhandan';


const DesktopRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPageLayout />}>
      <Route index element={<Home />} />
      <Route path="anniversary" element={<AnniversaryGifts />} />
      <Route path="birthday" element={<Birthday />} />
      <Route path="housewarming" element={<HouseWarming />} />
      <Route path="thankyou" element={<Thankyou />} />
      <Route path="blogcomponent" element={<BlogComponent />} />
      <Route path="carriers" element={<Carriers />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="combooffer" element={<ComboOffer />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="corporate" element={<CorporateGiftingPage />} />
      <Route path="franchiseenquery" element={<FranchiseEnquires />} />
      <Route path="gifts" element={< Gifts />} />
      <Route path="orders" element={<MyOrders />} />
      <Route path="ourwork" element={<OurWork />} />
      <Route path="filter" element={<PlantFilter />} />
      <Route path="seasonal" element={<SeasonalCollection1 />} />
      <Route path="pots" element={<Pots />} />
      <Route path="seeds" element={<Seeds />} />
      <Route path="outdoor" element={<OutdoorPlants />} />
      <Route path="plantcare" element={<PlantCare />} />
      <Route path="flower" element={<FloweringPlants />} />
      <Route path="feature" element={<Featured />} />
      <Route path="latest" element={<Latest />} />
      <Route path="bestseller" element={<BestSeller />} />
      <Route path="productdata/:id/" element={<ProductData />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="stores" element={<Stores />} />
      <Route path="hamburger" element={<Hamburger />} />
      <Route path="side" element={<SideParrot />} />
      <Route path="cart" element={<Cart />} />
      <Route path="giftcard" element={<EcommerceGiftCard/>} />
      <Route path="rakshabhandan" element={<RakshaBhandan/>} />
      
    </Route>

    <Route path="profile" element={<SideBarLayout />}>
      <Route index element={<ProfilePage />} />
      <Route path="trackorder" element={<TrackOrder />} />
      <Route path="notification" element={<Notification />} />
      <Route path="giftcard" element={<GiftCard />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="referal" element={<ReferAFriend />} />
      </Route>


    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const MobileRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPageLayout />}>
      <Route index element={<Home />} />
      <Route path="mobile-signin" element={<MobileSignIn />} />
      <Route path="mobile-verification" element={<MobileVerification />} />
      <Route path="mobile-login" element={<MobileLoginPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="ourwork" element={<OurWork />} />
      <Route path="franchiseenquery" element={<FranchiseEnquires />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="carriers" element={<Carriers />} />
      <Route path="side" element={<SideParrot />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="combooffer" element={<ComboOffer />} />
      <Route path="gifts" element={<Gifts />} />
      <Route path="anniversary" element={<AnniversaryGifts />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="productdata" element={<ProductData />} />
      <Route path="stores" element={<Stores />} />
      <Route path="orders" element={<MyOrders />} />
      <Route path="filter" element={<PlantFilter />} />
      <Route path="seasonal" element={<SeasonalCollection1 />} />
      <Route path="pots" element={<Pots />} />
      <Route path="seeds" element={<Seeds />} />
      <Route path="outdoor" element={<OutdoorPlants />} />
      <Route path="flower" element={<FloweringPlants />} />
      <Route path="feature" element={<Featured />} />
      <Route path="latest" element={<Latest />} />
      <Route path="bestseller" element={<BestSeller />} />
      <Route path="blogcomponent" element={<BlogComponent />} />
      <Route path="thankyou" element={<Thankyou />} />
      <Route path="giftcard" element={<EcommerceGiftCard/>} />
      <Route path="rakshabhandan" element={<RakshaBhandan/>} />
    
      
    </Route>

    <Route path="profile">
      <Route index element={<MobileSidebar />} />
      <Route path="myprofile" element={<ProfilePage />} />
      <Route path="trackorder" element={<TrackOrder />} />
      <Route path="notification" element={<Notification />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="referal" element={<ReferAFriend />} />
      <Route path="giftcard" element={<GiftCard />} />
    </Route>

    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const App = () => {
  return (
    <div>
      {isMobile ? <MobileRoutes /> : <DesktopRoutes />}
    </div>
  );
};

export default App;