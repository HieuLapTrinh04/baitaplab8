// src/pages/DetailPage.jsx
import React from 'react';
import MovieDetailCard from '../Components/MovieCard';

const DetailPage = () => {
  // Dữ liệu demo - sau này sẽ thay bằng dữ liệu thật (API hoặc props)
  const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    releaseDate: '2010-07-16',
    description: 'A skilled thief is given a chance at redemption if he can successfully perform inception.',
    posterUrl: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
    genre: 'Science Fiction',
    duration: '148 mins',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Movie Details</h2>
      <MovieDetailCard movie={movie} />
    </div>
  );
};

export default DetailPage;
