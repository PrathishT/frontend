import React, { useEffect, useState } from 'react';

export default function PodcastList({ onSelect }) {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/podcasts')
      .then(res => res.json())
      .then(data => setPodcasts(data))
      .catch(err => console.error('Failed to load podcasts:', err));
  }, []);

  return (
    <div>
      <h2>Podcast Episodes</h2>
      {podcasts.length === 0 && <p>No podcasts found</p>}
      {podcasts.map(p => (
        <div key={p._id} onClick={() => onSelect(p)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}