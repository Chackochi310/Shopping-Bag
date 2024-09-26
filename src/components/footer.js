import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-4 text-center py-5 w-full">
      <nav className="space-x-9">
        <a href="/" className="hover:underline">Home</a>
        <a href="/" className="hover:underline">Products</a>
        <a href="/" className="hover:underline">Contact</a>
      </nav>
      <p className="mt-2">&copy; 2024 Shopping Bag</p>
    </footer>
  );
};

export default Footer;
