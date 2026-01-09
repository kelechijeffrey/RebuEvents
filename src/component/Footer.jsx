import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center items-center">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} RebuEvents. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
