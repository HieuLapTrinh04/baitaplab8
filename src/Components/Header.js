import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        🎬 CineTicket
      </div>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#home" style={styles.navLink}>Trang Chủ</a></li>
          <li><a href="#movies" style={styles.navLink}>Phim Đang Chiếu</a></li>
          <li><a href="#booking" style={styles.navLink}>Đặt Vé</a></li>
          <li><a href="#contact" style={styles.navLink}>Liên Hệ</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: '10px 30px',
    color: '#fff',
    fontWeight: '600',
    fontSize: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
  },
  logo: {
    fontSize: '28px',
    fontWeight: '700',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '25px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  }
};

export default Header;
