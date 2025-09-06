// layout.js
"use client";
import React, { createContext, useState } from "react";
import Header from "./_components/Header";
import logo from "../../public/logo.svg";

export const WebCamContext = createContext();

const DashboardLayout = ({ children }) => {
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-300 via-white to-gray-300 flex flex-col">
      {/* Header */}
      <Header logo={logo} className="z-10 relative" />

      {/* Main Content */}
      <WebCamContext.Provider value={{ webCamEnabled, setWebCamEnabled }}>
        <main className="flex-grow">{children}</main>
      </WebCamContext.Provider>
    </div>
  );
};

export default DashboardLayout;
