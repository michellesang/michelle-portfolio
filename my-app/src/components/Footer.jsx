import React from 'react';

const footerStyle = {
  padding: '1rem 0', // Vertical padding
  marginTop: 'auto', // Push footer to the bottom
  textAlign: 'center', // Center text
  fontSize: '0.9rem', // Slightly smaller font
  color: '#6c757d' // Muted text color
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} Michelle Sang. All rights reserved.</p>
    </footer>
  );
};

export default Footer;