import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="dashboard-footer">
        <div className="developer-credit">
          <p>Developed by Raghu Nandan inquery system</p>
        </div>
        <div className="website-promotion">
          <a href="https://inquery-smoky.vercel.app/" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', textDecoration: 'none', display: 'block', marginTop: '10px'}}>
            Visit
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
