/* eslint-disable react/prop-types */
import { Analytics } from "@vercel/analytics/react";

import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main-content min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
