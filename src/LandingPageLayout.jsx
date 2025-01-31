// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
// import Navigation from "./Components/NavigationBar/NavigationBar";

// const LandingPageLayout = () => {


//   return (
//     <div className="landing-page-layout">
//       <Header />
//       <Navigation />
//       <main className="main-content">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

//  export default LandingPageLayout;


import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/NavigationBar/NavigationBar";

const LandingPageLayout = () => {
  return (
    <div className="landing-page-layout">
      {/* sticky Header */}
      <div className="sticky top-0 left-0 w-full z-50">
        <Header />
        <Navigation />
      </div>

      {/* Main Content with Top Padding */}
      {/* pt-[130px] */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
