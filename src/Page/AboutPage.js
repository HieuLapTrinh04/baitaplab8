import React from 'react';

const AboutPage = () => {
  const styles = {
    container: {
      maxWidth: '960px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#1b1b1b',
      color: '#f0f0f0',
      fontFamily: 'Segoe UI, sans-serif',
      borderRadius: '10px',
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#ff3c00',
      marginBottom: '20px',
    },
    intro: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#ccc',
      marginBottom: '40px',
    },
    teamSection: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    teamList: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '20px',
    },
    memberCard: {
      backgroundColor: '#2c2c2c',
      padding: '20px',
      borderRadius: '8px',
      width: '200px',
      boxShadow: '0 0 10px rgba(255, 60, 0, 0.3)',
    },
    avatar: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #ff3c00',
      marginBottom: '10px',
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '5px',
    },
    role: {
      fontSize: '0.95rem',
      color: '#aaa',
    },
    mission: {
      backgroundColor: '#252525',
      padding: '20px',
      borderLeft: '5px solid #ff3c00',
      borderRadius: '6px',
      fontSize: '1.05rem',
      lineHeight: '1.6',
      color: '#ddd',
    },
  };

  const teamMembers = [
    {
      name: 'Nguyễn Văn A',
      role: 'Backend Developer - API phim',
      avatar: '/images/avatar1.jpg',
    },
    {
      name: 'Trần Thị B',
      role: 'Thiết kế UI/UX',
      avatar: '/images/avatar2.jpg',
    },
    {
      name: 'Lê Văn C',
      role: 'Frontend - React Movie UI',
      avatar: '/images/avatar3.jpg',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Về Nhóm Phát Triển</h1>
      <p style={styles.intro}>
        Chúng tôi là nhóm sinh viên đam mê công nghệ và điện ảnh. Dự án website phim là sản phẩm tâm huyết nhằm mang lại trải nghiệm xem phim hiện đại và tiện lợi cho mọi người.
      </p>

      <div style={styles.teamSection}>
        <h2 style={styles.title}>Thành viên nhóm</h2>
        <div style={styles.teamList}>
          {teamMembers.map((member, index) => (
            <div style={styles.memberCard} key={index}>
              <img src={member.avatar} alt={member.name} style={styles.avatar} />
              <div style={styles.name}>{member.name}</div>
              <div style={styles.role}>{member.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.mission}>
        <h2 style={styles.title}>Sứ mệnh</h2>
        <p>
          Cung cấp nền tảng xem phim miễn phí, tốc độ cao, với giao diện thân thiện và nội dung phong phú.
          Chúng tôi liên tục cải tiến để mang lại trải nghiệm tốt nhất cho người dùng yêu thích điện ảnh.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
