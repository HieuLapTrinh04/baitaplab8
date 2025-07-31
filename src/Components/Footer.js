import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 CineTicket - Nơi mua vé xem phim uy tín</p>
      <p>Địa chỉ: 456 Phố Rạp Chiếu, Quận 3, TP.HCM</p>
      <p>Email: support@cineticket.vn | Hotline: 1900 1234</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#ccc',
    textAlign: 'center',
    padding: '15px 10px',
    fontSize: '14px',
    marginTop: 'auto',
    boxShadow: '0 -2px 5px rgba(0,0,0,0.3)'
  }
};

export default Footer;
