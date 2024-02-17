// components/Layout.js
import React from 'react';

const Layout = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        max-width: 1200px;
        margin: auto;
        padding: 20px;
      }
    `}</style>
  </div>
);

export default Layout;
