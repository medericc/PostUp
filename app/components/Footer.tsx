"use client";
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-[#8B3D4E]" // Footer with your requested background color
      style={footerStyle}
    >
      {/* Texte principal */}
      <p style={footerTextStyle}>Postup</p>

      {/* Section des icônes de réseaux sociaux */}
      <div style={socialIconsStyle}>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={iconStyle} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={iconStyle} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={iconStyle} />
        </a>
      </div>

      {/* Liens supplémentaires */}
      <div style={additionalLinksStyle}>
        <Link href="/contact" style={linkStyle}>Contactez-nous </Link>
        <a href="/mentions-legales" style={linkStyle}>Mentions légales</a>
        <a href="/first-pick" style={linkStyle}>First Pick Team</a>
      </div>

      {/* Copyright ou autres informations supplémentaires */}
      <p style={copyRightStyle}>© 2024 Postup. Tous droits réservés.</p>
    </footer>
  );
};

// Styles en JavaScript
const footerStyle: React.CSSProperties = {
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const socialIconsStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginBottom: '20px',
};

const additionalLinksStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginBottom: '20px',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.8rem',
  transition: 'color 0.3s',
  cursor: 'pointer',
};

const iconStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  color: '#fff',
  cursor: 'pointer',
  transition: 'color 0.3s',
};

const copyRightStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#aaa',
};

export default Footer;
